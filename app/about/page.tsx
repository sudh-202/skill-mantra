"use client";
import React, { useState } from "react";
import Image from "next/image";
import { tabData2 } from "@/constants";
import FeaturesSection from "@/components/Advantage";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"
import VisionMissionSection from "@/components/Courses/VisionMissionSection";
import AboutUs from "@/components/About";

const About = () => {
  const [activeTab, setActiveTab] = useState(tabData2[0].id);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue))

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  const activetabData2 = tabData2.find((tab) => tab.id === activeTab);
  return (
    <main>
      <div className='flex md:flex-row-reverse pt-[110px] flex-col items-center justify-center z-20 gap-10 bg-[url("/background.webp")] px-[5vw] py-[2vw] border-gray-10 border-b-2 relative'>
        <Image
          src="/about/grad.webp"
          alt="title"
          width={100}
          height={100}
          className="w-[150vw]"
        />

        <div className="">
          <h1 className="text-[3.9vw] leading-[4vw] pb-[1.4vw]">
            Founded in 2022, Skill Mantra is a dynamic ed-tech platform
          </h1>
          <p>
            Dedicated to transforming the landscape of professional education in
            India, we have, in a short span of time, successfully completed over
            15,000 hours of skilling, empowering the new generation of India in
            three crucial domains: Corporate Accounting, Corporate Finance, and
            Human Resource Management, paving the way for a more skilled and
            competent workforce.
          </p>
        </div>
      </div>
      <div className="relative">
        <VisionMissionSection />
        {/* <motion.img
          src="/circle2.webp"
          alt="circle"
          width={700}
          height={100}
          className="absolute -translate-y-[25%]  md:-left-[30%] -left-[70%] z-10"
          animate={{
            translateY: [-10, 10],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
        /> */}
        </div>
   
      <div className="mt-[10vw] md:mt-0 border-gray-10 border-b-2 relative">
        <motion.img
          src="/circle2.webp"
          alt="circle"
          width={700}
          height={100}
          className="absolute -translate-y-[25%]  md:-left-[30%] -left-[70%] z-10"
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
        <h2 className="md:text-[3vw] text-[10vw]  font-semibold text-center text-blue-90">
          Skill-Mantra Advantage
        </h2>
        <FeaturesSection />
      </div>

      <div className="">
        <AboutUs/>
      </div>
      
    </main>
  );
};

export default About;
