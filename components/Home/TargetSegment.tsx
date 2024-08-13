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
      <h2 className="text-5xl font-semibold text-center text-black mb-8">Target Segment Definition</h2>
      <div className="flex flex-wrap justify-center gap-4 p-4 md:p-0">
        {target.map((feature, index) => (
          <Card key={index} className="flex flex-col items-center justify-center text-center w-full sm:w-1/2 lg:w-1/5 bg-blue-90 py-5">
            <CardHeader className="flex flex-col justify-center items-center">
              <Image src={feature.icon} alt={feature.title} className="h-[150px] w-[150px] mb-4" width={100} height={100} />
              <CardTitle className="text-3xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center mt-auto p-4">
              <Link href={feature.link} passHref className="bg-white text-blue-90 px-4 py-2 rounded-md hover:bg-gray-10 transition-colors duration-300 text-2xl">
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
