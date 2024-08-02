"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { courses } from '../constants';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { FaClock, FaGraduationCap, FaUniversity, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const CoursesSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full py-16 bg-white text-blue-900 flex flex-col items-center lg:px-12 px-4">
            <h2 className="text-center lg:text-7xl text-4xl font-semibold mb-8">Our Courses</h2>
            <div className="relative w-full max-w-[1320px] pb-24">
                <Carousel
                    opts={{ align: "start" }}
                    className="w-full"
                >
                    <CarouselContent className=''>
                        {courses.map((course, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 w-full">
                                <div className="bg-[#89fff98e] pt-3 pb-8 px-3 rounded-2xl shadow-md flex flex-col h-full">
                                    <div className='bg-white rounded-2xl p-6 mb-4'>
                                        <h3 className="lg:text-4xl text-2xl font-semibold mb-2 border-b-2 border-blue-90 pb-4">{course.title}</h3>

                                        <div className="mb-2 flex flex-row justify-between border-b-2 border-blue-90 py-3">
                                            <div className='flex flex-col'>
                                                
                                                <p className=' font-bold flex items-center'>
                                                <FaClock className="mr-2" />
                                                    Duration
                                                </p>
                                                {course.duration}
                                                <p className='font-bold flex items-center mt-4 '>
                                                    <FaGraduationCap className="mr-2" />
                                                    Modules
                                                </p>
                                                {course.modules}
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='font-bold flex items-center'>
                                                    <FaUniversity className="mr-2" />
                                                    Eligibility
                                                </p>
                                                {course.eligibility}
                                                <p className='font-bold flex items-center  mt-4'>
                                                    <FaDollarSign className="mr-2" />
                                                    Mode
                                                </p>
                                                {course.mode}
                                            </div>
                                        </div>
                                        <ul className="list-none text-black mb-4 font-semibold italic mt-5">
                                            {course.description.map((desc, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <FaCheckCircle className="mr-2 text-green-600" />
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex justify-center gap-5 mt-auto">
                                        <Button asChild className='bg-blue-90 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                                            <Link href="/login">Learn More</Link>
                                        </Button>
                                        <Button asChild className='bg-[#FFC224] hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>
                                            <Link href="/login">Enroll Now</Link>
                                        </Button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-gray-700 text-white p-2 rounded-full" />
                    <CarouselNext className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-gray-700 text-white p-2 rounded-full" />
                </Carousel>
                <Image
                    src="/icons/dotsv2.webp"
                    alt="dots"
                    width={250}
                    height={100}
                    className="absolute bottom-[-120px] left-0 z-10 hidden lg:block"
                    loading='lazy'
                />
                
            </div>
            
        </div>
    );
};

export default CoursesSection;
