"use client";
import React from 'react';
import { notFound } from 'next/navigation';
import { COURSES, tabData } from '@/constants/index';
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
  // Find the current course based on the slug
  const currentCourse = COURSES.find(course => course.link === params.slug);

  // If no course is found, show a 404 page
  if (!currentCourse) {
    notFound();
    return null; // Ensure nothing is rendered if course is not found
  }

  // Extract courseSlug from the currentCourse
  const courseSlug = currentCourse.link;

  return (
    <>
      <CourseHero />
      <Companies />
      <TargetSegment />
      <Partners />
      {/* Pass the dynamic courseSlug to TabsSection */}
      <TabsSection courseSlug={courseSlug as keyof typeof tabData} />
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
