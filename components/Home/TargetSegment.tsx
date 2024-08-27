"use client"

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { target } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"

const TargetSegment: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ['start end', 'end start']
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue));
  return (
    <div className="pb-20 pt-48 px-2 bg-blue-90 text-white  relative">

      <div className="relative  flex flex-col md:flex-row justify-center md:gap-4 gap-[40vw] w-[70%] md:w-full translate-x-[20%] md:translate-x-0">
        <motion.img
          src="/circle2.webp"
          alt="circle"
          width={750}
          height={100}
          className="absolute md:-left-[30%] -left-[80%] -top-[280px] md:-top-[190%]  "
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
        <motion.img
          src="/icons/dotsv2.webp"
          alt="dots"
          width={200}
          height={100}
          className="absolute md:-right-[1%] -right-16 top-[101%] md:-top-[50%]  z-10  hidden lg:block"
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
        {target.map((feature, index) => (

          <Card key={index} className=" relative flex flex-col items-center md:justify-center justify-between text-center md:w-1/5  bg-white pt-[5vw] pb-[3vw]  rounded-[40px] ">
            <Image src={feature.icon} alt={feature.title} className="h-[150px] w-[150px] mb-4 absolute md:-translate-y-[105%] -translate-y-[90%]" width={100} height={100} />
            <CardHeader className="flex flex-col justify-center items-center ">
              <CardTitle className="md:text-[2vw] text-black">{feature.title}</CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center mt-auto p-4">
              <Link href="/counselling" passHref className="bg-[#AABDE1] text-blue-90 px-4 py-2 rounded-md hover:bg-gray-10 transition-colors duration-300 md:text-[1.5vw]">
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TargetSegment;
