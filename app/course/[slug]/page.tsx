

"use client";

import { useParams } from 'next/navigation';
import { Coursesdata } from "@/constants";
import Image from 'next/image';
import FormSection from '@/components/Courses/FormSection';
import TestimonialCarousel from '@/components/Home/Testimonials';
import TargetSegment from '@/components/Home/TargetSegment';
import Partners from '@/components/Home/Partners';
import { assistanceData } from '@/constants/';
import Companies from '@/components/Home/Companies';
import TabsSection from '@/components/TabSection';
import WhyThis from '@/components/Courses/WhyThis';
import CarouselIconSection from '@/components/Courses/CarouselIconSection';
import AssistanceSection from '@/components/Courses/AssistanceSection';
import Steps from '@/components/Courses/Steps';
import Tools from '@/components/Courses/Tools';
import CourseOfferings from '@/components/Courses/CourseOfferings';
import {Certificate} from '@/components/Courses/Certificate';
import Shopsy from '@/components/Courses/Shopsy';
import WhyCourse from '@/components/Courses/Who';

const CoursePage = () => {
  const { slug } = useParams(); // Get slug from URL parameters

  // Find the course based on slug
  const course = Coursesdata.find(course => course.slug === slug);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <main className='w-full h-screen '>
      <div className='flex flex-row-reverse justify-center items-center gap-10 bg-[url("/background.webp")] px-[5vw] py-[2vw]'>
        <Image src={course.imagePath} alt={course.title} width={100} height={100} className='w-[30vw]' />
        <h1 className='text-[4.5vw] leading-[6vw]'>
          Transform your career as a <span className='font-semibold text-blue-90'>{course.title}</span>.
        </h1>
      </div>
      <FormSection />
      <div className='flex justify-center items-center px-[5vw] py-[5vw] border-b-2 border-blue-10'>
        <Image src="/courses/stats-panel.webp" alt='stats-panel' width={100} height={100} className='w-[100vw]' />
      </div>
      {/* <TestimonialCarousel /> */}
      <Companies />
      <TargetSegment />
      <Partners />
      <TabsSection/>
      <WhyThis/>
      <CarouselIconSection/>
      <AssistanceSection services={assistanceData} />
      <Steps/>
      <Tools/>
      <CourseOfferings/>
      <Certificate/>
      <Shopsy/>
      <WhyCourse/>
    </main>
  );
};

export default CoursePage;
