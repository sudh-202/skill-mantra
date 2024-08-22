import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface WhyThisProps {
  WhyCourseHeading: string;
  WhyCourse: {
    title: string;
    icon: React.ComponentType<{ size: number }>;
  }[];
}

const WhyThis: FC<WhyThisProps> = ({ WhyCourseHeading, WhyCourse }) => {
  return (
    <section className="py-[5vw] bg-blue-90 overflow-hidden">
      <div className="container mx-auto md:px-[1vw] px-[10vw]">
        <h2 className="md:text-[3vw] text-[7vw] font-bold text-center mb-8 text-white">
          {WhyCourseHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WhyCourse.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                <feature.icon size={48} aria-label={feature.title} />
              </div>
              <h3 className="text-lg font-medium">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="relative border-b-2 border-white overflow-hidden">
        <motion.div
          initial={{ x: "4vw", y: "2.8vw" }}
          animate={{ x: "calc(100vw - 225px)" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/courses/car.webp"
            alt="Car image showing stats"
            width={200}
            height={100}
            className="transform scale-x-[-1]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyThis;
