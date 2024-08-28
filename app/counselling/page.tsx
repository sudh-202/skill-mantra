"use client"
import Hero from "@/components/Home/Hero";
import VideoSection from "@/components/Home/VideoSection";
import { cardsData } from '@/constants';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Define a list of colors for the cards
const cardColors = [
  'bg-[#FFC224]', 
  'bg-[#AABDE1]', 
  'bg-[#00E0D3]', 
  'bg-[#00E0D3]',
  'bg-[#FFC224]', 
  'bg-[#AABDE1]', 
];

interface CardProps {
    title: string;
    description: string;
    image: string;
}

const Counseliing = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ['start end', 'end start']
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue));

    return (
        <>
            <Hero />
            <VideoSection />

            <section className="py-12 px-[1vw] bg-white border-gray-10 border-b-2 relative pt-[100px]">
               
                <h2 className="md:text-[4vw] text-[7vw] font-bold text-center text-gray-800 mb-8">
                    What is covered in the counselling session:
                </h2>
                <div className="flex flex-wrap justify-center gap-8 relative">
                    <motion.img
                        src="/circle.webp"
                        alt="circle"
                        width={700}
                        height={100}
                        className="absolute -translate-y-[60%] md:-left-[35%] -left-[70%] z-10"
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
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 p-4 z-30 ${cardColors[index % cardColors.length]}`}
                        >
                            <div className="w-full md:p-[2vw] flex items-center justify-center text-black md:text-[6vw] text-[20vw]">
                                {/* Render the icon dynamically */}
                                <card.icon />
                            </div>
                            <div className="my-4">
                                <h3 className="md:text-[1.5vw] text-[7vw] font-semibold text-center text-black">{card.title}</h3>
                                <p className="text-lg text-center text-black mt-2 whitespace-pre-line">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Counseliing;
