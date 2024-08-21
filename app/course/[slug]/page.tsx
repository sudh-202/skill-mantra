"use client"
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
import CourseHero from '@/components/Courses/CourseHero';

const CoursePage = () => {


  return (
  <>
      <CourseHero/>
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
  </>
  );
};

export default CoursePage;
