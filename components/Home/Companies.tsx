"use client"
import React from 'react';
import Image from 'next/image';
import { companiesimg } from '@/constants';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"

const Companies: React.FC = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ['start end', 'end start']
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue))  
    return (
        <div className='w-full bg-white md:py-12 px-4 md:px-12 py-15 md:pb-[6vw] pb-[12vw] relative z-10'>
             <motion.img
                src="/circle.webp"
                alt="circle"
                width={750}
                height={100}
                className="absolute md:-right-[30%]   -right-[70%] "
                animate={{
                    translateY: [-20, 20],
                    
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2,
                    ease: "easeInOut",
                  }}
            />
           
            <h2 className="text-[7vw] md:text-[3.4vw]   text-blue-90 text-center my-12 md:pl-12 ">Trusted by 200+ Companies Worldwide</h2>
            <div className="flex flex-col md:flex-row items-center container mx-auto ">

                {/* Left side with logos */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-between text-center md:text-left">

                    {/* <p className="text-gray-700 mb-8">Dedicated Career Services team to help find your dream company.</p> */}

                    {/* First Line of Logos Moving Left to Right */}
                    <div className="overflow-hidden w-full mb-2">
                        <div className="flex animate-marquee gap-7">
                            {companiesimg.concat(companiesimg).map((company, index) => (
                                <div key={index} className="flex-none flex justify-center items-center">
                                    <Image src={company.logo} alt={company.name} width={140} height={140} className="object-contain" loading='lazy' />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Line of Logos Moving Right to Left */}
                    <div className="overflow-hidden w-full mb-2">
                        <div className="flex animate-marquee-reverse gap-7">
                            {companiesimg.concat(companiesimg).map((company, index) => (
                                <div key={index} className="flex-none  flex justify-center items-center">
                                    <Image src={company.logo} alt={company.name} width={140} height={140} className="object-contain" loading='lazy' />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                    <a href="/contact">Contact Us</a>
                </Button> */}
                </div>

                {/* Right side with image */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center z-20">
                    <Image
                        src="/companies-logos/company.webp"
                        alt="Placement Image"
                        width={500}
                        height={500}
                        className="rounded-lg"
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    );
};

export default Companies;
