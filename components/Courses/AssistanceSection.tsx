import React from 'react';

interface AssistanceSectionProps {
  services: { title: string; points: string[] }[];
}

const AssistanceSection: React.FC<AssistanceSectionProps> = ({ services }) => {
  return (
    <div className="p-4 rounded-lg mt-8">
      <div className="flex items-center justify-center px-[4vw]">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-black bg-[url('/courses/paper.webp')] bg-cover bg-no-repeat h-[50vh] flex-1 flex flex-col items-center justify-center px-[6vw]  overflow-hidden text-start mx-[4vw]"
          >
            <h3 className="text-[2vw] font-bold text-start">{service.title}</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 leading-relaxed text-[1.2codevw]">
              {service.points.map((point, i) => (
                <li key={i} className="whitespace-pre-wrap break-words">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssistanceSection;
