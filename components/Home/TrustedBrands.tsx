"use client";
import React from 'react';
import { TRUSTED_BRANDS } from '@/constants';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

const TrustedBrands: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
    console.log(latestValue)
  );

  return (
    <div className="bg-white py-16 px-4 border-b-[1px] border-gray-200 relative overflow-hidden">
      <motion.img
        src="/circle2.webp"
        alt="circle"
        width={750}
        height={100}
        className="absolute left-0 top-0 md:-left-[30%] md:-top-[190%]"
        loading="lazy"
        animate={{
          translateY: [-10, 10],
          translateX: [1750]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
        Ratings from Various Portals
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 gap-10 px-4 md:px-8">
        <motion.img
          src="/icons/arrow.webp"
          alt="arrow"
          width={40}
          height={100}
          className="absolute hidden md:block z-40 top-[6%] left-[10%]"
          loading="lazy"
          animate={{
            translateY: [-10, 10],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
        />
        {TRUSTED_BRANDS.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto relative space-y-4 sm:space-y-0"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <span className="bg-blue-90 text-white px-2 py-1 rounded-md text-xs md:text-sm font-bold">
                {brand.rating}
              </span>
              <Image
                src={brand.image}
                alt={brand.name}
                className="w-24 h-10 md:w-40 md:h-16 object-contain"
                width={160}
                height={40}
              />
            </div>

            <div className="flex items-center sm:ml-4 text-xl md:text-3xl">
              {Array.from({ length: Math.floor(brand.stars) }, (_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              {brand.stars % 1 !== 0 && (
                <FaStarHalfAlt className="text-yellow-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
