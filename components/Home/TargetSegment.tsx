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
    <div className="pb-20 pt-48 px-2 bg-blue-90 text-white  relative">

      <div className="  flex flex-col md:flex-row justify-center md:gap-4 gap-[40vw] w-[70%] md:w-full translate-x-[20%] md:translate-x-0">
        <Image
          src="/circle2.webp"
          alt="circle"
          width={750}
          height={100}
          className="absolute -left-[30%] -top-[190%]  hidden md:block"
        />
        <Image
          src="/icons/dotsv2.webp"
          alt="dots"
          width={200}
          height={100}
          className="absolute -right-[1%] -top-[50%] z-10 hidden md:block"
          loading='lazy'
        />
        {target.map((feature, index) => (

          <Card key={index} className=" relative flex flex-col items-center md:justify-center justify-between text-center md:w-1/5  bg-white pt-[5vw] pb-[3vw]  rounded-[40px] ">
            <Image src={feature.icon} alt={feature.title} className="h-[150px] w-[150px] mb-4 absolute md:-translate-y-[105%] -translate-y-[90%]" width={100} height={100} />
            <CardHeader className="flex flex-col justify-center items-center ">
              <CardTitle className="md:text-[2vw] text-black">{feature.title}</CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center mt-auto p-4">
              <Link href={feature.link} passHref className="bg-[#AABDE1] text-blue-90 px-4 py-2 rounded-md hover:bg-gray-10 transition-colors duration-300 md:text-[1.5vw]">
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TargetSegment;
