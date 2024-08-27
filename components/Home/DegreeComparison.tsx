"use client"
import React from 'react';
import { DEGREE_DATA } from '@/constants';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"

const DegreeComparison: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue))
  return (
    <div className="p-4 bg-white py-24 flex items-center justify-center flex-col relative">
      <motion.img
        src="/circle.webp"
        alt="circle"
        width={750}
        height={100}
        className="absolute -right-[30%]  z-10 "
        animate={{
          translateY: [-20, 20],

        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      />
      <h1 className="text-5xl font-bold text-center mb-4">{DEGREE_DATA.title}</h1>
      <p className="text-center mb-8">{DEGREE_DATA.subtitle}</p>
      <div className=" w-full max-w-5xl z-30">

        <div className="overflow-x-auto ">
          <table className="min-w-full  ">
            <thead className=''>
              <tr className=''>
                <th className="px-4 py-2 text-left border border-black bg-[#FFC224]">Feature</th>
                <th className="px-4 py-2 text-center border border-black bg-[#BDFFFC]">Traditional</th>
                <th className="px-4 py-2 text-center border bg-blue-90 text-white">Smart</th>
              </tr>
            </thead>
            <tbody>
              {DEGREE_DATA.rows.map((row, index) => (
                <tr key={index} className="text-center ">
                  <td className="border border-black px-4 py-2 text-left bg-[#FFC224]">{row.label}</td>
                  <td className="border border-black px-4 py-2 bg-[#BDFFFC]">
                    {row.traditional ? (
                      <FaCheckCircle className="text-green-500 mx-auto" />
                    ) : (
                      <FaTimesCircle className="text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="border px-4 py-2 bg-blue-90">
                    {row.smart ? (
                      <FaCheckCircle className="text-green-500 mx-auto" />
                    ) : (
                      <FaTimesCircle className="text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DegreeComparison;
