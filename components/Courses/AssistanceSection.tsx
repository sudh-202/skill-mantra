import React from 'react';
import Image from 'next/image';

interface AssistanceSectionProps {
  services: { title: string; points: string[]; icon: React.ComponentType<{ className?: string }> }[];
}

const AssistanceSection: React.FC<AssistanceSectionProps> = ({ services }) => {
  return (
    <div className="p-2 rounded-lg mt-8  relative">
      <Image
                src="/circle2.webp"
                alt="circle"
                width={750}
                height={100}
                className="absolute -left-[500px] translate-y-[10vw]  hidden md:block"
            />
      <div className="flex items-start justify-start pb-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-white rounded-2xl bg-blue-90 md:h-[50vh] h-[35vh] flex-1 flex flex-col items-center justify-center px-[5vw] overflow-hidden mx-[5vw]"
          >
            <h3 className="md:text-[2.6vw] text-[5vw] text-center font-bold">{service.title}</h3>
          
            
           
            <ul className="mt-4 list-disc list-inside space-y-3 leading-relaxed md:text-[1.5vw] text-[2.5vw] ">
              {service.points.map((point, i) => (
                <li key={i} className="whitespace-pre-wrap break-words">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssistanceSection;
