// components/CourseOfferings.tsx
import { FC } from "react";
import { courseOfferings } from "@/constants";
import { IconType } from "react-icons";

interface CourseOfferingsProps {}

const CourseOfferings: FC<CourseOfferingsProps> = ({}) => {
  return (
    <section className="md:py-[4vw] py-[7vw] bg-white text-white">
      <div className="">
        <h2 className="md:text-[3.6vw] text-[7vw] font-bold text-center mb-8 text-blue-90">
          Who Can Join Certified Corporate Accounting
        </h2>
        <div className="flex flex-wrap justify-center gap-6 md:flex-row flex-col px-[7vw]">
          {courseOfferings.map((course, index) => {
            const Icon: IconType = course.icon;
            return (
              <div
                key={index}
                className="p-6 bg-blue-90 rounded-md shadow-md flex flex-col  items-center text-center  md:w-1/4"
              >
                <Icon className="text-4xl text-white mb-4 w-[4vw] h-[4vw]" />
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-300">{course.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseOfferings;
