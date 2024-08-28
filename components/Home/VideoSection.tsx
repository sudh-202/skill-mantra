"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const YoutubeVideo: FC = () => {
  return (
    <section className="py-12 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 items-center justify-between">
          {/* Video Section */}
          <div className="relative flex justify-center items-center w-full md:w-1/2">
            <div className="hidden md:block z-30">
              <motion.div
                className="absolute top-48 -left-[12vw] rotate-45 "
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="  flex items-center justify-center">
                  <Image src="/x.webp" alt="tri" width={100} height={100} />
                </div>
              </motion.div>
              <motion.div
                className="absolute top-72 -left-[22vw] rotate-45 "
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="w-16 h-16  flex items-center justify-center">
                  <Image src="/plus.webp" alt="tri" width={100} height={100} />
                </div>
              </motion.div>
              <motion.div
                className="absolute top-0 -left-[22vw] rotate-45 "
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="w-12 h-12  flex items-center justify-center">
                  <Image src="/tri.webp" alt="tri" width={100} height={100} />
                </div>
              </motion.div>
              <motion.div
                className="absolute top-0 -right-[22vw] rotate-45"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
                <div className="w-12 h-12  flex items-center justify-center">
                <Image src="/triangle.webp" alt="tri" width={100} height={100} />
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-0 -right-[22vw] rotate-45"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="w-12 h-12  flex items-center justify-center">
                <Image src="/square.webp" alt="tri" width={100} height={100} />
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-20 -right-[12vw] rotate-45"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
                <div className="w-12 h-12  flex items-center justify-center">
                <Image src="/circle1.webp" alt="tri" width={100} height={100} />
                </div>
              </motion.div>
            </div>
            <div className="w-full h-56 md:h-72 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center text-white text-xl relative">
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                muted
                loop
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Animated Elements */}
          </div>

          {/* Stats Section */}
          <Image src="/stats.webp" alt="stats" width={1200} height={100} />
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideo;
