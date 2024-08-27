"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/constants";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"

const WhyUs: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue))
  return (
    <div className="py-10 px-2 bg-[#00E0D3]">
      <h2 className="text-5xl font-semibold text-center text-white mb-8">Why Choose Skill Mantra?</h2>
      <div className="flex flex-wrap justify-center gap-4 p-4 md:p-0">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col items-center justify-center text-center w-full sm:w-1/2 lg:w-1/5 bg-[#FFC224] ">
            <CardHeader className="flex justify-center items-center">
              <Image src={feature.icon} alt={feature.title} className="h-[150px] w-[150px] mb-4" width={100} height={100} />
              <CardTitle className="text-3xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <motion.img
        src="/circle2.webp"
        alt="circle"
        width={750}
        height={100}
        className="absolute -left-[38%] top[10%]  "
        animate={{
          translateY: [-50, 50],

        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default WhyUs;
