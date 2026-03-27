import { Button } from "@/components/ui/button"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const RootPage = () => {
    return (
        <div className="flex min-h-screen">
            {/* Left half: video */}
            <div className="w-1/2 h-screen relative overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover border-2 border-amber-950"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src="/videos/demo.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Right half: content */}
            <div className="w-1/2 h-screen flex flex-col items-center justify-center gap-4 bg-background p-8">
                <h1 className="text-2xl font-semibold flex items-center gap-x-3">
                    Welcome to Reverb
                    <Image src={"/logo.png"} width={25} height={25} alt="logo" />
                </h1>

                <div className="flex items-center gap-4">
                    <OrganizationSwitcher />
                </div>

                <div className="mt-5">
                    <Link href={"/dashboard"}>
                        <Button className="py-5 pr-1 pl-4 rounded-full flex gap-x-7 justify-between items-center">
                            Take me to dashboard
                            <span className="bg-white text-black p-2 rounded-full">
                                <ChevronRight className="hover:animate-pulse" />
                            </span>
                        </Button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default RootPage
