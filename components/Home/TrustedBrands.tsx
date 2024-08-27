"use client"
import React from 'react';
import { TRUSTED_BRANDS } from '@/constants';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react"

const TrustedBrands: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ['start end', 'end start']
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) => console.log(latestValue));
  return (
    <div className="bg-white py-20 md:px-4  border-b-[1px] border-grey   relative ">
       <motion.img
          src="/circle2.webp"
          alt="circle"
          width={750}
          height={100}
          className="absolute md:-left-[30%] top-0 -left-0  md:-top-[190%]"
          loading='lazy'
          animate={{
            translateY: [-10, 10],
            translateX:[1750]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
        />
      {/* <h2 className="md:text-[5vw] text-[8vw] font-abril ml-4 font-semibold text-center mb-5 md:mb-12">Ratings section from various portals</h2> */}
      <div className="flex flex-col md:flex-row  justify-center items-center md:gap-[10vw] gap-[7vw] px-[6vw] relative overflow-hidden">

        {TRUSTED_BRANDS.map((brand, index) => (
          <div key={index} className="flex items-center justify-between w-full sm:w-auto ">

            <div className="flex items-center gap-5">
              <span className="bg-blue-90 text-white px-2 py-1 rounded-md text-sm font-bold">{brand.rating}</span>
              <Image src={brand.image} alt={brand.name} className="md:w-52 md:h-18 md:mx-2" width={100} height={100} />
            </div>
            <div className="flex items-center ml-4 text-3xl">
              {Array.from({ length: Math.floor(brand.stars) }, (_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              {brand.stars % 1 !== 0 && <FaStarHalfAlt className="text-yellow-500" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
