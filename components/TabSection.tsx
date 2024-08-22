import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { tabData } from '@/constants';

type TabsSectionProps = {
  courseSlug: keyof typeof tabData; // Ensure courseSlug matches the keys in tabData
};

const TabsSection: React.FC<TabsSectionProps> = ({ courseSlug }) => {
  // Initialize activeTab with a default value, which will be updated once data is available
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Ensure courseSlug is valid and has tabs
    if (courseSlug in tabData && tabData[courseSlug].length > 0) {
      setActiveTab(tabData[courseSlug][0].id); // Set the initial active tab
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
    <section className="py-[10vw] md:py-[7vw] px-[12vw] md:px-[8vw] overflow-hidden">
      <div className="flex flex-row flex-wrap gap-4 md:gap-8">
        {courseSlug in tabData && tabData[courseSlug].map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer flex flex-col-reverse items-center justify-center text-center p-5 md:p-8 rounded-lg md:h-[40vh] h-[30vh] border w-full md:w-1/6 ${
              activeTab === tab.id ? 'bg-blue-90 ' : 'bg-[#defffd] border-gray-200'
            } md:flex-grow min-h-full`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className={`text-sm md:text-xl font-medium mt-4 ${
              activeTab === tab.id ? 'text-white' : 'text-gray-800'
            }`}>
              {tab.title}
            </span>
            <Image src={tab.icon} alt={tab.title} width={150} height={150} />
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-center text-blue-90">{activeTabData?.title}</h3>
        <p className="text-center text-gray-700 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          {activeTabData?.content}
        </p>
      </div>
    </section>
  );
};

export default TabsSection;
