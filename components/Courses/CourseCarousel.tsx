
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
    <section className="bg-[#AABDE1] py-8 overflow-hidden">
      <Carousel>
        <CarouselContent className="flex space-x-6 px-8">
          {filteredCourses.map((course) => (
            <CarouselItem key={course.id} className="flex-shrink-0 cursor-pointer md:basis-1/3 lg:basis-1/3">
              <Link href={course.link} className='flex flex-col justify-center items-center gap-5'>
                <div className="relative w-[20vw] h-[20vw]  overflow-hidden">
                  <Image 
                    src={course.imagePath} 
                    alt={course.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <p className="text-center text-blue-90 mt-4 text-[1.2vw] font-semibold">{course.title}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="text-white ">
     
        </CarouselPrevious>
        <CarouselNext className="text-white">
          
        </CarouselNext> */}
      </Carousel>
    </section>
  );
};

export default CourseCarousel;
