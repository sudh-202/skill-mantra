// components/InternshipSection.tsx
import { internshipData } from "@/constants";
import Image from "next/image";

export const Certificate = () => {
  const {
    heading,
    img,

  } = internshipData;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between  bg-blue-90 text-white px-[8vw] py-[6vw] md:py-[2vw]">
      {/* Left Section */}
      <div className="flex flex-col space-y-4 md:w-1/2">
        <h1 className="md:text-[3.5vw] font-bold md:leading-[5vw] text-[7vw] leading-[10vw] text-center md:text-left">{heading}</h1>
        
      </div>

      {/* Right Section */}
      
        <Image src={img} alt="certificate" width={600} height={100}/>
      
    </section>
  );
};
