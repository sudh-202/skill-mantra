import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"

const WhyCourse = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue))
  return (
    <main className="w-full md:h-[70vh] flex justify-center items-center md:px-[15vh] px-[5vw] md:py-0 py-[5vw]  bg-[#AABDE1] gap-24  overflow-hidden flex-col-reverse md:flex-row">
      <motion.img
        src="/circle.webp"
        alt="circle"
        width={750}
        height={100}
        className="absolute md:-left-[500px] md:translate-y-[10vw] "
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
      <p className="font-semibold md:p-0 p-[5vw] md:text-left text-center">
        At Skill Mantra, we are dedicated to empowering individuals with the
        practical skills and knowledge needed to excel in today’s competitive
        job market. Specialising in short-term, job-oriented courses, we bridge
        the gap between academic learning and real-world demands. Our mission is
        to equip our students with industry-relevant expertise, ensuring they
        are job-ready from day one. With a focus on fields like accounting, HR,
        tax, and financial modelling, we provide hands-on training and career
        support to help you succeed in your chosen profession.
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image src="../courses/who.webp" alt="who" width={100} height={100} className="md:w-[1200px] w-[100vw]" />
      </div>
    </main>
  );
};

export default WhyCourse;
