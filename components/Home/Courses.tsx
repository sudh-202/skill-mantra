"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { courses } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { FaClock, FaGraduationCap, FaUniversity, FaCheckCircle } from "react-icons/fa";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const CoursesSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
        console.log(latestValue)
    );

    return (
        <div className="w-full py-16 text-blue-900 flex flex-col items-center md:px-12 px-10 bg-blue-90 border-b-2 border-white">
            <h2 className="text-center lg:text-7xl text-4xl mb-8 text-white">Our Courses</h2>
            <div className="relative w-full max-w-[1320px] pb-24">
                <Carousel opts={{ align: "start" }} className="w-full">
                    <CarouselContent>
                        {courses.map((course, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 w-full">
                                <div className="bg-[#FFC224] py-8 px-3 rounded-2xl shadow-md flex flex-col h-full">
                                    <div className="bg-white p-6 mb-4">
                                        <h3 className="md:text-2xl text-2xl font-semibold mb-2 border-b-2 border-blue-90 pb-4">
                                            {course.title}
                                        </h3>
                                        <div className="mb-2 flex flex-row justify-between border-b-2 border-blue-90 py-3">
                                            <div className="flex flex-col">
                                                <p className="font-bold flex items-center">
                                                    <FaClock className="mr-2" />
                                                    Duration
                                                </p>
                                                {course.duration}
                                                <p className="font-bold flex items-center mt-4">
                                                    <FaGraduationCap className="mr-2" />
                                                    Modules
                                                </p>
                                                {course.modules}
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="font-bold flex items-center">
                                                    <FaUniversity className="mr-2" />
                                                    Eligibility
                                                </p>
                                                {course.eligibility}
                                                <p className="font-bold flex items-center mt-4">
                                                    ₹ Mode
                                                </p>
                                                {course.mode}
                                            </div>
                                        </div>
                                        <ul className="list-none text-black mb-4 font-semibold italic mt-5">
                                            {course.description.map((desc, idx) => (
                                                <li key={idx} className="flex items-center md:text-[1vw] text-[3vw]">
                                                    <FaCheckCircle className="mr-2 text-green-600" />
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex justify-center gap-5 mt-auto">
                                        <Button asChild className="bg-blue-90 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                            <Link href={`/course/${course.slug}`}>Learn More</Link>
                                        </Button>
                                        <Button asChild className="bg-[#00E0D3] hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                        <Link href="/form">Enroll Now</Link>
                                        </Button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="block absolute md:left-[-3vw] -left-[30px] top-1/2 transform -translate-y-1/2 bg-transparent text-white border-transparent z-40" />
                    <CarouselNext className="block absolute md:right-[-3vw] top-1/2 transform -translate-y-1/2 bg-transparent text-white border-transparent z-40" />
                </Carousel>
                <motion.img
                    src="/icons/dotsv2.webp"
                    alt="dots"
                    width={250}
                    height={100}
                    className="absolute bottom-[-120px] left-0 z-10 hidden lg:block"
                    loading="lazy"
                    animate={{ translateY: [-10, 10] }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 2, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
};

export default CoursesSection;
