import { OrganizationList, OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import Image from "next/image"

const RootPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
            <h1 className="text-2xl font-semibold flex justify-center items-center gap-x-3">
                Welcome to Reverb
                <Image src={"/logo.png"} width={25} height={25} alt='logo' />
            </h1>
            <div className="flex items-center gap-4">
                <OrganizationSwitcher />
            </div>

            <span className="text-sm text-muted-foreground border p-1 rounded-full">continue from 43:20</span>
        </div>
    )
}

export default RootPage
