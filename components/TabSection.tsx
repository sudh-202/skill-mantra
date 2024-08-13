// components/TabsSection.tsx

import React, { useState } from 'react';
import { tabData } from '@/constants';
import Image from 'next/image';

const TabsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].id);

    const handleTabClick = (id: string) => {
        setActiveTab(id);
    };

    const activeTabData = tabData.find(tab => tab.id === activeTab);

    return (
        <section className="py-[5vw] md:py-[7vw] px-5 md:px-20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                {tabData.map((tab) => (
                    <div
                        key={tab.id}
                        className={`cursor-pointer flex flex-col items-center justify-center text-center p-5 md:p-8 rounded-lg h-[30vh] border ${
                            activeTab === tab.id ? 'bg-green-100 border-green-500' : 'bg-gray-50 border-gray-200'
                        } flex-grow min-h-full`} // Updated class
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <Image src={tab.icon} alt={tab.title} width={50} height={50} />
                        <span className={`text-lg md:text-xl font-medium mt-4 ${
                            activeTab === tab.id ? 'text-green-600' : 'text-gray-800'
                        }`}>
                            {tab.title}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-10 md:mt-16">
                <h3 className="text-xl md:text-2xl font-semibold text-center text-green-600">{activeTabData?.title}</h3>
                <p className="text-center text-gray-700 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
                    {activeTabData?.content}
                </p>
            </div>
        </section>
    );
};

export default TabsSection;
