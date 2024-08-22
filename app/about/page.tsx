"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { tabData2 } from '@/constants';
import FeaturesSection from '@/components/Advantage';

const About = () => {
    const [activeTab, setActiveTab] = useState(tabData2[0].id);

    const handleTabClick = (id: string) => {
        setActiveTab(id);
    };

    const activetabData2 = tabData2.find(tab => tab.id === activeTab);
    return (
        <main>
        <div className='flex md:flex-row-reverse flex-col items-center justify-center gap-10 bg-[url("/background.webp")] px-[5vw] py-[2vw] border-gray-10 border-b-2'>
            <Image src="/about/grad.webp" alt='title' width={100} height={100} className='w-[150vw]' />
            <div className="">
                <h1 className="text-[3.9vw] leading-[4vw] pb-[1.4vw]">
                    Founded in 2022, Skill Mantra is a dynamic ed-tech platform
                </h1>
                <p>
                    dedicated to transforming the landscape of professional education in
                    India. In a short span of time, we have successfully completed over
                    15,000 hours of skilling, empowering the new generation of India in
                    three crucial domains: Corporate Accounting, Corporate Finance, and
                    Human
                </p>
            </div>
        </div>
        <section className="py-[10vw] md:py-[7vw] px-[12vw] md:px-[8vw] overflow-hidden border-gray-10 border-b-2 ">
            <div className="flex flex-row flex-wrap gap-4 md:gap-8">
                {tabData2.map((tab) => (
                    <div
                        key={tab.id}
                        className={`cursor-pointer flex flex-col-reverse items-center justify-center text-center p-5 md:p-8 rounded-lg md:h-[40vh] h-[30vh] border w-full md:w-1/6 ${
                            activeTab === tab.id ? 'bg-blue-90 ' : 'bg-[#defffd] border-gray-200'
                        } md:flex-grow min-h-full`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <span className={`text-sm md:text-xl font-medium  ${
                            activeTab === tab.id ? 'text-white' : 'text-gray-800'
                        }`}>
                            {tab.title}
                        </span>
                        <Image src={tab.icon} alt={tab.title} width={250} height={150} />
                    </div>
                ))}
            </div>

            <div className="mt-10 md:mt-16">
                <h3 className="text-xl md:text-2xl font-semibold text-center text-blue-90">{activetabData2?.title}</h3>
                <p className="text-center text-gray-700 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
                    {activetabData2?.content}
                </p>
            </div>
        </section>
        <div className='mt-[10vw] md:mt-0 border-gray-10 border-b-2 '>
            <h2 className='md:text-[3vw] text-[10vw]  font-semibold text-center text-blue-90'>Skill-Mantra Advantage</h2>
            <FeaturesSection/>
            
        </div>
        </main>
    );
};

export default About;
