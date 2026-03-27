import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LandingNavbar = () => {
    return (
        <div className='w-full h-13 flex items-center justify-between px-5'>
            {/* logo */}
            <div className='flex gap-x-2'>
                <Image src={"/logo.png"} width={25} height={25} alt='logo' />
                <p className='font-bold'>Reverb</p>
            </div>
            {/* auth button */}
            <div className="group">
                <Button variant="default" className="border-none hover:none bg-transparent px-0 py-0 text-black">
                    <span className="relative inline-block">
                        <Link href={"/sign-in"}>
                            <span className="relative z-10">Sign Up</span>
                        </Link>
                        <span className="absolute h-px left-0 bottom-0 w-0 bg-current transition-all duration-300 group-hover:w-full" />
                    </span>
                </Button>
            </div>
        </div>
    )
}

export default LandingNavbar
