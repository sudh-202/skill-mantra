"use client";

import Image from 'next/image';
import ContactForm from "@/components/ContactForm"; 
import { data } from "@/constants";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ['start end', 'end start']
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue))
    return (
        <section className=" flex justify-center md:flex-row flex-col items-center px-[5vw] md:py-[5vw] py-[10vw] gap-32 bg-blue-90 overflow-hidden">

            <div className="">

                <div className="flex flex-col z-20">
                    {data.sections.map((section, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <Image src="/icons/tick.webp" alt="icon" width={84} height={84} className="w-[64px] h-[64px]" />
                            <span className="text-xl md:text-3xl lg:text-5xl font-abril ml-4 font-semibold text-white">{section.title}</span>
                        </div>
                    ))}
                    <div>
                        <Button asChild className="bg-[#FFC224] py-8 px-8 text-2xl rounded-xl text-blue-90 flex justify-center items-center lg:w-[60%]">
                            <Link href="/login">Download Prospectus</Link>
                        </Button>
                    </div>
                </div>
                <div className="mt-8">
                    {data.subsections.map((subsection, index) => (
                        <div key={index} className="flex items-center mb-2 justify-center lg:justify-start lg:items-start z-20">
                            <span className="text-xl md:text-3xl lg:text-4xl text-white font-semibold">{subsection.title}</span>
                        </div>
                    ))}
                    <motion.img
                        src="/icons/dots.webp"
                        alt="dots"
                        width={100}
                        height={100}
                        className="absolute top-[760px] z-10 hidden md:block"
                        loading='lazy'
                        animate={{
                            translateY: [-10, 10],
                          }}
                          transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 2,
                            ease: "easeInOut",
                          }}
                    />
                </div>
                <div className="flex flex-wrap gap-4 md:gap-2 mt-6 flex-col lg:flex-row">
                    {data.stats.map((stat, index) => (
                        <div key={index} className="w-full md:w-auto text-start mb-2 md:mb-0 flex lg:flex-col gap-4 lg:gap-2">
                            <div className="text-xl md:text-3xl lg:text-4xl font-bold text-white">{stat.percentage}</div>
                            <div className="text-sm md:text-base lg:text-lg text-white w-[70%]">{stat.description}</div>

                        </div>

                    ))}
                    <motion.img
                        src="/icons/arrow.webp"
                        alt="arrow"
                        width={40}
                        height={100}
                        className="absolute top-[480px] z-10 hidden md:block translate-x-[550px] "
                        loading='lazy'
                        animate={{
                            translateY: [-10, 10],
                            translateX: [550]
                          }}
                          transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 2,
                            ease: "easeInOut",
                          }}
                        
                    />

                </div>

            </div>

            <div className="relative z-20  flex-col -mt-[20vw] md:mt-[0vw] md:pt-0  ">
                <motion.img
                    src="/circle.webp"
                    alt="circle"
                    width={1050}
                    height={100}
                    className="absolute md:right-[-350px] md:top-[-330px] -top-[60%]  -right-[80%] "
                    animate={{
                        translateY: [-10, 10],
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 2,
                        ease: "easeInOut",
                      }}
                />
                <ContactForm />

            </div>
        </section>
    );
};

export default Hero;
