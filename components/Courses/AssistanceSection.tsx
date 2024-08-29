import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"

interface AssistanceSectionProps {
  services: {
    title: string;
    points: string[];
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

const AssistanceSection: React.FC<AssistanceSectionProps> = ({ services }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue))
  return (
    <div className="p-4  pt-16 relative bg-blue-90">
      <motion.img
        src="/circle2.webp"
        alt="circle"
        width={750}
        height={100}
        className="absolute md:-left-[500px] md:translate-y-[10vw]  -left-[70%] z-10"
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
      <div className="flex md:flex-row flex-col gap-5 items-start justify-start pb-10 z-40">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-blue-90 rounded-2xl bg-white h-[50vh] flex-1 flex flex-col items-center justify-center px-[5vw] md:py-0 py-[4vw] overflow-hidden z-30"
          >
            <h3 className="md:text-[2vw] text-[7vw] text-center font-bold">
              {service.title}
            </h3>

            <ul className="mt-4 list-disc list-inside space-y-3 leading-relaxed md:text-[1.5vw] text-[2.5vw] ">
              {service.points.map((point, i) => (
                <li key={i} className="md:text-[1vw] text-[2.5vw]">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssistanceSection;
