"use client";
import React from 'react';
import { notFound } from 'next/navigation';
import { COURSES, tabData, COURSE_DETAILS } from '@/constants/index';
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
import Who from '@/components/Courses/Who';
import FormSection from '@/components/Courses/FormSection';
import CourseCarousel from '@/components/Courses/CourseCarousel';
import { assistanceData } from '@/constants/';
import courseOfferingsMap from '@/constants/'; // Import courseOfferingsMap
import TestimonialCarousel from '@/components/Home/Testimonials';
import StatsSection from '@/components/Courses/StatsSection';

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
  const courseSlug = currentCourse.link as keyof typeof courseOfferingsMap; // Ensure courseSlug matches the expected type

  // Debugging log
  console.log('courseSlug:', courseSlug);

  const courseDetails = COURSE_DETAILS[courseSlug];

  // Debugging log
  console.log('courseDetails:', courseDetails);

  // Check if courseDetails exists to avoid runtime errors
  if (!courseDetails) {
    notFound();
    return null;
  }

  const { WhyCourseHeading, WhyCourse } = courseDetails;

  return (
    <main className='overflow-hidden'>
      <CourseHero />
      <TestimonialCarousel/>
      <Companies />
      <StatsSection/>
      <TargetSegment />
      <Partners />
      <TabsSection courseSlug={courseSlug} />
      <WhyThis WhyCourseHeading={WhyCourseHeading} WhyCourse={WhyCourse} />
      <CarouselIconSection courseSlug={courseSlug} />
      <AssistanceSection services={assistanceData} />
      <Steps />
      <Tools />
      <CourseOfferings courseTitle={courseSlug} /> 
      <Certificate />
      <Shopsy />
      <Who />
      <FormSection />
      <CourseCarousel currentCourseId={currentCourse.id} />
    </main>
  );
};

export default CoursePage;
