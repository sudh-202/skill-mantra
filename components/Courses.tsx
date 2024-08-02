"use client"
import React, { useState } from 'react';
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

import 'tailwindcss/tailwind.css';

const CoursesSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Placeholder for tracking slide change manually if needed
    // This will depend on the library's capabilities

    return (
        <div className="w-full py-16 bg-white text-blue-900 flex flex-col items-center lg:px-0 px-4">
            <h2 className="text-center text-6xl font-semibold mb-8">Our Courses</h2>
            <div className="relative w-full max-w-[1320px]">
                <Carousel
                    opts={{ align: "start" }}
                    className="w-full"
                // No onSlideChange prop here
                >
                    <CarouselContent>
                        {courses.map((course, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3  w-full">
                                <div className="bg-[#89fff98e] pt-3 pb-8 px-3 rounded-lg shadow-md flex flex-col h-full">
                                    <div className='bg-white rounded-lg p-6 mb-4'>
                                        <h3 className="text-4xl font-semibold mb-2 border-b-2 border-blue-90 pb-4">{course.title}</h3>

                                        <div className="mb-2 flex flex-row  justify-between border-b-2 border-blue-90 py-3">
                                            <div className='flex flex-col'>
                                                <p className='text-xl font-semibold'>Duration </p>
                                                {course.duration}
                                                <p className='text-xl font-semibold mt-4'>Modules </p>
                                                {course.modules}
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='text-xl font-semibold'>Eligibility </p>
                                                {course.eligibility}
                                                <p className='text-xl font-semibold mt-4'>Mode </p>
                                                {course.mode}
                                            </div>
                                        </div>
                                        <ul className="list-decimal list-inside text-black mb-4 font-semibold italic mt-5">
                                            {course.description.map((desc, idx) => (
                                                <li key={idx}>{desc}</li>
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
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-gray-700 text-white p-2 rounded-full" />
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full bg-gray-700 text-white p-2 rounded-full" />
                </Carousel>
                {/* Custom Indicators */}
                {/* <div className="flex justify-center mt-4">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-1 w-4 h-4 rounded-full ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div> */}
            </div>
        </div>
    );
};

export default CoursesSection;
