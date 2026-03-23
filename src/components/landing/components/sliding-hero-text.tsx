"use client"

import ButtonWithIconDemo from "@/components/button-witn-icon"
import { motion } from "motion/react"
import Link from "next/link"
import { redirect } from "next/navigation"
import React from "react"

const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
        y: "0%",
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
            delay: i * 0.15,
        },
    }),
}

const HeroText = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center gap-y-1"
        >
            {/* 1st line */}
            <div className="overflow-hidden">
                <motion.div
                    custom={0}
                    variants={lineVariants}
                    className="text-5xl font-semibold leading-tight"
                >
                    Self-Hosted <span className="text-emerald-600">Neural TTS</span>
                </motion.div>
            </div>

            {/* 2nd line */}
            <div className="overflow-hidden">
                <motion.div
                    custom={1}
                    variants={lineVariants}
                    className="text-5xl font-semibold leading-tight flex items-center gap-x-3"
                >
                    Real-time speech
                    <video
                        className="w-[7.9vw] h-[4.5vw] rounded-full object-cover border-2 border-amber-950"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                    >
                        <source src="/videos/demo.mp4" type="video/mp4" />
                    </video>
                </motion.div>
            </div>

            {/* 3rd line */}
            <div className="overflow-hidden">
                <motion.div
                    custom={2}
                    variants={lineVariants}
                    className="text-5xl font-semibold leading-tight"
                >
                    with built-in voice cloning
                </motion.div>
            </div>

            {/* 4th line */}
            <div className="overflow-hidden">
                <motion.div
                    custom={3}
                    variants={lineVariants}
                    className="text-md font-normal text-neutral-500 mt-1"
                >
                    Fast, scalable, and fully yours
                </motion.div>
            </div>

            {/* CTA */}
            <div className="overflow-hidden mt-8">
                <motion.div custom={4} variants={lineVariants}>
                    <Link href={"/sign-in"}>
                        <ButtonWithIconDemo />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default HeroText
