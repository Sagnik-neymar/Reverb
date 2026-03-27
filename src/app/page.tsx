"use client"

import LandingNavbar from '@/features/landing/components/navbar'
import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from 'sonner'
import Image from 'next/image'
import HeroText from '@/features/landing/components/sliding-hero-text'
import { motion } from "motion/react"


const page = () => {
  return (
    <div className='w-full max-h-screen overflow-hidden '>
      <LandingNavbar />
      <div className='flex mt-8 justify-center gap-x-3 min-h-screen'>
        {/* left section */}
        <div className='w-[47%] h-[70vh] rounded-4xl  bg-gray-300/30 flex items-center overflow-hidden'>
          <div className="relative z-20 flex items-center text-left min-h-screen px-10">
            <HeroText/>
          </div>
        </div>
        {/* right section */}
        <motion.div
          className='h-[70vh] rounded-4xl relative overflow-hidden'
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "47%", opacity: 1 }}
          transition={{
            width: { duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.2 },
            opacity: { duration: 0.4, delay: 0.2 },
          }}
        >
          <Image src="/ascii-mic.png" alt="ascii mic" fill className="object-cover" />
        </motion.div>
      </div>
    </div>
  )
}

export default page
