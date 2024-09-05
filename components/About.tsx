import React from "react";
import Image from "next/image";
import { aboutUsContent } from "@/constants";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-16 bg-blue-90 py-10"> {/* Increased gap between sections */}
      {aboutUsContent.map((section, index) => (
        <section
          key={index}
          className={`relative flex flex-col md:flex-row items-center justify-between gap-10 p-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} max-w-[1550px] w-full`}
        >
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
            <Image
              src={section.image}
              alt={`${section.title} image`}
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div className={`w-full md:w-1/2 p-8 md:p-14 rounded-2xl ${section.bgColor}`}>
            <h2 className="md:text-[2.5vw] font-bold text-black mb-4">{section.title}</h2>
            <p className="text-black md:text-[1.4vw]">{section.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutUs;
