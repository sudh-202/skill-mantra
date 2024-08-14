import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { target } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const TargetSegment: React.FC = () => {
  return (
    <div className="py-20 px-2 bg-[#FFC224] text-white">
      <h2 className="md:text-[5vw]  text-[9vw] font-semibold text-center text-black mb-8">Target Segment Definition</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4 w-[70%] md:w-full translate-x-[20%] md:translate-x-0">
        {target.map((feature, index) => (
          <Card key={index} className="flex flex-col items-center justify-center text-center md:w-1/5  bg-blue-90 py-[2vw] px-[1vw]">
            <CardHeader className="flex flex-col justify-center items-center ">
              <Image src={feature.icon} alt={feature.title} className="h-[150px] w-[150px] mb-4" width={100} height={100} />
              <CardTitle className="md:text-[2vw]">{feature.title}</CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center mt-auto p-4">
              <Link href={feature.link} passHref className="bg-white text-blue-90 px-4 py-2 rounded-md hover:bg-gray-10 transition-colors duration-300 md:text-[1.5vw]">
                Learn More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TargetSegment;
