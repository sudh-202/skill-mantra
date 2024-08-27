import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COURSES } from '@/constants/index';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Importing Shadcn Carousel components

interface CourseCarouselProps {
  currentCourseId: number;
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({ currentCourseId }) => {
  // Filter out the current course
  const filteredCourses = COURSES.filter(course => course.id !== currentCourseId);

  return (
    <section className="bg-[#FFC224] py-8 overflow-hidden">
      <Carousel>
        <CarouselContent className="flex space-x-6 px-8">
          {filteredCourses.map((course) => (
            <CarouselItem key={course.id} className="flex-shrink-0 cursor-pointer md:basis-1/3 lg:basis-1/3">
              <Link href={course.link} className='flex flex-col justify-center items-center gap-5'>
                <div className="relative md:w-[20vw] w-[70vw] md:h-[20vw] h-[70vw] overflow-hidden">
                  <Image 
                    src={course.imagePath} 
                    alt={course.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <p className="text-center text-blue-90 mt-4 md:text-[1.2vw] text-[7vw] font-semibold">{course.title}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 md:left-10 left-5 transform -translate-y-1/2 text-black bg-white p-2 rounded-full z-10">
          <span className="text-xl">←</span>
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 md:right-10 right-5 transform -translate-y-1/2 text-black bg-white p-2 rounded-full z-10">
          <span className="text-xl">→</span>
        </CarouselNext>
      </Carousel>
    </section>
  );
};

export default CourseCarousel;
