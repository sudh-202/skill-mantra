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
        <section className="py-[10vw] md:py-[7vw] px-[12vw] md:px-[8vw] overflow-hidden">
            <div className="flex flex-row flex-wrap gap-4 md:gap-8">
                {tabData.map((tab) => (
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
