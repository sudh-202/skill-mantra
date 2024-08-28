"use client";
import Image from "next/image";
import FormSection from "@/components/Courses/FormSection";
import { MdDownloadForOffline } from "react-icons/md";
import { useParams } from "next/navigation";
import {
  Coursesdata,
  STATIC_OFFER_DETAILS,
  COURSE_TITLES,
  COURSE_DESCRIPTIONS,
  COURSE_DURATIONS,
  COURSE_START_DATES,
  COURSE_IMAGES,
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
  const { offerText, scholarshipText, downloadText, downloadLink, countdown } =
    STATIC_OFFER_DETAILS;

  return (
    <main className="relative ">
      <section className="flex flex-col items-center justify-center bg-[#AABDE1] pb-[5vw]">
        <h2 className="md:text-[5vw] text-[8vw] font-bold text-center text-blue-90 md:mt-[0vw] pt-[4vw] z-20">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center pt-10 gap-[2vw] relative px-[8vw]">
          <motion.img
            src="/circle.webp"
            alt="circle"
            width={650}
            height={100}
            className="absolute md:right-[-350px] md:top-[-330px] -top-[50%] -right-[50%]"
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

          {/* <div className="relative rounded-full overflow-hidden w-[45vw] h-[45vw] md:w-[35vw] md:h-[35vw]">
                        <Image src={image} alt="Offer Image" layout="fill" objectFit="cover" />
                        
                    </div> */}
          <div className="mt-10 text-center w-1/2">
            <p className="md:text-[2vw] text-[5vw] text-blue-90 text-left">
              {description}
            </p>
            <div className="flex flex-col md:flex-row justify-start  mt-6 ">
              <div className="bg-white text-blue-90 py-4 px-12 rounded-2xl flex gap-32 text-left ">
                <span className="block text-2xl font-bold">Duration<br/> <span className="font-thin"> {duration}</span></span>
                <span className="block text-2xl font-bold"> Starts in<br/> <span className="font-thin">{startDate}</span></span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center z-20">
            <div className="bg-blue-90 text-white px-10 py-16 rounded-2xl flex flex-col items-center justify-center ">
              <h3 className="md:text-[2vw] text-[5vw]">{offerText}</h3>
              <p className="mt-2 md:text-[2vw] text-[6vw] font-semibold">
                {scholarshipText}
              </p>
              <a
                href={downloadLink}
                className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold md:text-[2.4vw] text-[6.2vw] flex gap-3 items-center"
              >
                <MdDownloadForOffline />
                {downloadText}
              </a>
              <div className="flex justify-between md:mt-[5vw] mt-[10vw] text-center gap-6">
                <div className="bg-white text-blue-90 py-4 px-8 rounded-2xl">
                  <span className="block text-2xl font-bold">
                    {countdown.days}
                  </span>
                  <span className="block text-sm">Days</span>
                </div>
                <div className="bg-white text-blue-90 py-4 px-8 rounded-2xl">
                  <span className="block text-2xl font-bold">
                    {countdown.hours}
                  </span>
                  <span className="block text-sm">Hours</span>
                </div>
                <div className="bg-white text-blue-90 py-4 px-8 rounded-2xl">
                  <span className="block text-2xl font-bold">
                    {countdown.minutes}
                  </span>
                  <span className="block text-sm">Minutes</span>
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
        className="mx-auto my-[5vw] w-[90vw]"
      />
    </main>
  );
};

export default CourseHero;
