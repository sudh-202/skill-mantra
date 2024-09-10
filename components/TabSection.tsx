import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { tabData } from '@/constants';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';

type TabsSectionProps = {
  courseSlug: keyof typeof tabData;
};

const TabsSection: React.FC<TabsSectionProps> = ({ courseSlug }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  useMotionValueEvent(scrollYProgress, 'change', (latestValue) => console.log(latestValue))

  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Ensure courseSlug is valid and has tabs
    if (courseSlug in tabData && tabData[courseSlug].length > 0) {
      setActiveTab(tabData[courseSlug][0].id);
    }
  }, [courseSlug]);

  // Handle tab click events
  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  // Get the data for the currently active tab
  const activeTabData = courseSlug in tabData
    ? tabData[courseSlug].find(tab => tab.id === activeTab)
    : undefined;

  return (
    <section className="py-[10vw] md:py-[7vw] px-[12vw] md:px-[8vw] relative">
      <motion.img
        src="/circle2.webp"
        alt="circle"
        width={700}
        height={100}
        className="absolute top-[50%] md:-right-[25%] -right-[70%]"
        animate={{
          translateY: [-10, 10],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
      />
      <div className="flex flex-row flex-wrap gap-4 md:gap-8">
        {courseSlug in tabData && tabData[courseSlug].map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer flex flex-col-reverse items-center justify-center text-center p-5 md:p-8 rounded-lg md:h-[40vh] h-[30vh] border w-full md:w-1/6 ${activeTab === tab.id ? 'bg-blue-90 ' : 'bg-[#defffd] border-gray-200'
              } md:flex-grow min-h-full`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className={`text-sm md:text-xl font-semibold mt-4 ${activeTab === tab.id ? 'text-white' : 'text-gray-800'
              }`}>
              {tab.title}
            </span>
            <Image src={tab.icon} alt={tab.title} width={150} height={150} />
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-center text-blue-90">{activeTabData?.title}</h3>
        <p
          className="text-center text-gray-700 text-lg md:text-xl mt-4 max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: activeTabData?.content || '' }}
        />
      </div>
      <div>
        <Button asChild className="bg-[#00E0D3] py-4 md:py-8 px-6 md:px-8 text-[3vw] md:text-[1.5vw] rounded-xl text-blue-90 flex justify-center items-center uppercase mt-[35px] w-1/4 mx-auto">
        <Link href="/form">Enroll Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default TabsSection;
