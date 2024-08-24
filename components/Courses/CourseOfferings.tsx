import React, { FC } from 'react';
import courseOfferingsMap from '@/constants/';
import { IconType } from 'react-icons';

interface CourseOfferingsProps {
  courseTitle: keyof typeof courseOfferingsMap; // Ensures courseTitle matches the keys of courseOfferingsMap
}

const CourseOfferings: FC<CourseOfferingsProps> = ({ courseTitle }) => {
  const courseData = courseOfferingsMap[courseTitle] || { heading: "", offerings: [] };
  const { heading, offerings } = courseData;

  // Define an array of background colors
  const backgroundColors = [
    'bg-[#FFC224;]',
    'bg-[#AABDE1]',
    'bg-[#00E0D3]',
    'bg-[#FFC224;]',
    'bg-[#AABDE1]',
    'bg-[#00E0D3]',
  ];

  return (
    <section className="md:py-[4vw] py-[7vw] bg-white text-white">
      <div className="">
        <h2 className="md:text-[3.6vw] text-[7vw] font-bold text-center mb-8 text-blue-90">
          {heading} Course ?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:flex-row flex-col px-[7vw]">
          {offerings.map((course, index) => {
            const Icon: IconType = course.icon;

            // Pick a color based on the index
            const backgroundColor = backgroundColors[index % backgroundColors.length];

            return (
              <div
                key={index}
                className={`p-6 ${backgroundColor} rounded-md shadow-md flex flex-col items-center text-center md:w-1/4`}
              >
                <Icon className="text-4xl text-blue-90 mb-4 w-[4vw] h-[4vw]" />
                <h3 className="text-xl font-semibold mb-2 text-blue-90">{course.title}</h3>
                <p className="text-black">{course.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseOfferings;
