import React from 'react';
import { visionText, missionText } from '@/constants';
import Image from 'next/image';
import Who from '@/components/Courses/Who';

const VisionMissionSection: React.FC = () => {
    return (
        <div className="flex flex-col py-10 px-6 sm:px-10">
            <div className="bg-white overflow-hidden px-6 sm:px-12 lg:px-24">
                <div className="flex flex-col gap-10">
                    {/* Vision Section */}
                    <div className="w-full flex md:flex-row-reverse flex-col  items-center gap-6 lg:gap-10">
                        <div className="">
                            <Image src="/about/mission.jpg" alt="Vision Icon" width={100} height={100} className="w-64  md:w-[90%]" />
                        </div>
                        <p className="text-gray-600 text-lg lg:text-2xl text-center lg:text-left">{visionText}</p>
                    </div>

                    {/* Mission Section */}
                    <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                        <div className="">
                            <Image src="/about/vision.jpg" alt="Mission Icon" width={100} height={100} className="w-64  md:w-[80%]" />
                        </div>
                        <p className="text-gray-600 text-lg lg:text-2xl text-center lg:text-left p-0 lg:p-10">{missionText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMissionSection;
