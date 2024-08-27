// components/InternshipSection.tsx
import { internshipData } from "@/constants";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"

export const Certificate = () => {
  const { heading, img } = internshipData;
  const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ['start end', 'end start']
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue))

  return (
    
    <section className=" relative flex flex-col md:flex-row items-center justify-between  bg-blue-90 text-white px-[8vw] py-[6vw] md:py-[2vw]">
      <motion.img
        src="/circle2.webp"
        alt="circle"
        width={700}
        height={100}
        className="absolute translate-y-[30vw] md:-right-[25%] -right-[70%] z-10 "
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
      {/* Left Section */}
      <div className="flex flex-col space-y-4 md:w-1/2">
        <h1 className="md:text-[3.5vw] font-bold md:leading-[5vw] text-[7vw] leading-[10vw] text-center md:text-left">
          {heading}
        </h1>
      </div>

      {/* Right Section */}

      <Image src={img} alt="certificate" width={600} height={100} className="z-30"/>
    </section>
  );
};
