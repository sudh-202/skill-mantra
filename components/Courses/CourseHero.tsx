'use client';

import Image from "next/image";
import FormSection from "@/components/Courses/FormSection";
import { MdDownloadForOffline } from "react-icons/md";
import { useParams } from "next/navigation";
import {
  COURSE_TITLES,
  COURSE_DESCRIPTIONS,
  COURSE_DURATIONS,
  COURSE_START_DATES,
  COURSE_IMAGES,
  COURSE_DOWNLOAD_LINKS,
  STATIC_OFFER_DETAILS, // Import the download links mapping
} from "@/constants";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

const CourseHero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
    console.log(latestValue)
  );
  const { slug } = useParams(); // Get slug from URL parameters

  // Debugging: Log the current slug value to ensure it's correct
  console.log("Current slug:", slug);

  // Get course details based on slug
  const title =
    COURSE_TITLES[slug as keyof typeof COURSE_TITLES] || "Course Title";
  const description =
    COURSE_DESCRIPTIONS[slug as keyof typeof COURSE_DESCRIPTIONS] ||
    "Course Description";
  const duration =
    COURSE_DURATIONS[slug as keyof typeof COURSE_DURATIONS] || "Duration";
  const startDate =
    COURSE_START_DATES[slug as keyof typeof COURSE_START_DATES] || "Start Date";
  const image =
    COURSE_IMAGES[slug as keyof typeof COURSE_IMAGES] ||
    "/courses/default.webp"; // Default image if dynamic image is not found

  // Get static offer details
  const { offerText, scholarshipText, downloadText, countdown } =
    STATIC_OFFER_DETAILS;

  // Determine the download link based on the slug
  const downloadLink =
    COURSE_DOWNLOAD_LINKS[slug as keyof typeof COURSE_DOWNLOAD_LINKS] ||
    "#";

  return (
    <main className="relative">
      <section className="flex flex-col items-center justify-center bg-[#AABDE1] pb-[4vw]">
        <h2 className="text-[10vw] md:text-[4vw] font-bold text-center text-blue-90 my-[2vw] z-20">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[2vw] relative px-[5vw] md:px-[8vw]">
          <motion.img
            src="/circle.webp"
            alt="circle"
            width={650}
            height={100}
            className="absolute md:right-[-350px]  -top-[50%] -right-[50%] md:-top-[20%]"
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

          <div className="mt-10 text-center w-full md:w-1/2">
            <p className="text-[4vw] md:text-[1.7vw] text-blue-90 md:text-left">
              {description}
            </p>
            <div className="flex flex-col md:flex-row justify-start mt-6 gap-4 w-1/2 mx-auto md:mx-0">
              <div className="bg-white text-blue-90 py-4 px-8 md:px-12 rounded-2xl flex flex-col md:flex-row gap-4 md:text-left text-center">
                <span className="block text-[4vw] md:text-[2vw] font-bold">
                  Duration
                  <br />
                  <span className="font-normal text-[2vw] md:text-[1.3vw]">{duration}</span>
                </span>
                <span className="block text-[4vw] md:text-[2vw] font-bold">
                  Starts
                  <br />
                  <span className="font-normal text-[2vw] md:text-[1.3vw] tracking-tighter">{startDate}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center z-20 mt-8 md:mt-0">
            <div className="bg-blue-90 text-white px-6 py-8 md:px-10 md:py-16 rounded-2xl flex flex-col items-center justify-center">
              <h3 className="text-[4vw] md:text-[2vw]">{offerText}</h3>
              <p className="mt-2 text-[5vw] md:text-[2vw] font-semibold">
                {scholarshipText}
              </p>
              <a
                href={downloadLink}
                className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold text-[5vw] md:text-[2.4vw] flex gap-3 items-center"
              >
                <MdDownloadForOffline />
                {downloadText}
              </a>
              <div className="flex flex-row justify-center md:mt-[5vw] mt-[10vw] text-center gap-4 md:gap-6">
                <div className="bg-white text-blue-90 py-4 px-6 md:px-8 rounded-2xl">
                  <span className="block text-[4vw] md:text-[2vw] font-bold">
                    {countdown.days}
                  </span>
                  <span className="block text-[3vw] md:text-[1.5vw]">Days</span>
                </div>
                <div className="bg-white text-blue-90 py-4 px-6 md:px-8 rounded-2xl">
                  <span className="block text-[4vw] md:text-[2vw] font-bold">
                    {countdown.hours}
                  </span>
                  <span className="block text-[3vw] md:text-[1.5vw]">Hours</span>
                </div>
                <div className="bg-white text-blue-90 py-4 px-6 md:px-8 rounded-2xl">
                  <span className="block text-[4vw] md:text-[2vw] font-bold">
                    {countdown.minutes}
                  </span>
                  <span className="block text-[3vw] md:text-[1.5vw]">Minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <motion.img
        src="/circle2.webp"
        alt="circle"
        width={750}
        height={100}
        className="absolute md:-left-[500px] -left-[70%]"
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
      <div className="z-40 mx-auto container">
        <FormSection />
      </div>
      <Image
        src="/courses/stats-panel.webp"
        alt="circle"
        width={100}
        height={100}
        className="mx-auto my-[5vw] w-[90vw] md:w-[80vw]"
      />
    </main>
  );
};

export default CourseHero;
