import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/videos/(.*)',
])

const isOrgSelectionRoute = createRouteMatcher(['/org-selection(.*)'])

// Routes that should never trigger the orgId redirect
const isAuthRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/org-selection(.*)',
])

export default clerkMiddleware(async (auth, req) => {
    const { userId, orgId } = await auth()

    // Signed in, no org, not already on an auth route → force to org-selection
    if (userId && !orgId && !isAuthRoute(req)) {
        return NextResponse.redirect(new URL('/org-selection', req.url))
    }

    // Signed in with org, trying to access org-selection → redirect to dashboard
    if (userId && orgId && isOrgSelectionRoute(req)) {
        return NextResponse.redirect(new URL('/root', req.url))
    }

    // Not signed in, accessing protected route → Clerk handles redirect to sign-in
    if (!userId && !isPublicRoute(req)) {
        await auth.protect()
    }

    return NextResponse.next()
})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
}
