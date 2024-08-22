"use client"
import React from 'react';
import { notFound } from 'next/navigation';
import { COURSES } from '@/constants/index';
import CourseHero from '@/components/Courses/CourseHero';
import Companies from '@/components/Home/Companies';
import TargetSegment from '@/components/Home/TargetSegment';
import Partners from '@/components/Home/Partners';
import TabsSection from '@/components/TabSection';
import WhyThis from '@/components/Courses/WhyThis';
import CarouselIconSection from '@/components/Courses/CarouselIconSection';
import AssistanceSection from '@/components/Courses/AssistanceSection';
import Steps from '@/components/Courses/Steps';
import Tools from '@/components/Courses/Tools';
import CourseOfferings from '@/components/Courses/CourseOfferings';
import { Certificate } from '@/components/Courses/Certificate';
import Shopsy from '@/components/Courses/Shopsy';
import WhyCourse from '@/components/Courses/Who';
import FormSection from '@/components/Courses/FormSection';
import CourseCarousel from '@/components/Courses/CourseCarousel';
import { assistanceData } from '@/constants/';

interface CoursePageProps {
  params: { slug: string };
}

const CoursePage = ({ params }: CoursePageProps) => {
  const currentCourse = COURSES.find(course => course.link.includes(params.slug));

  if (!currentCourse) {
    notFound(); // Returns a 404 page if course not found
  }

  return (
    <>
      
      <CourseHero />
      <Companies />
      <TargetSegment />
      <Partners />
      <TabsSection />
      <WhyThis />
      <CarouselIconSection />
      <AssistanceSection services={assistanceData} />
      <Steps />
      <Tools />
      <CourseOfferings />
      <Certificate />
      <Shopsy />
      <WhyCourse />
      <FormSection />
      <CourseCarousel currentCourseId={currentCourse.id} />
    </>
  );
};

export default CoursePage;
