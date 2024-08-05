import { FC } from 'react';
import { stats } from '@/constants';

const VideoSection: FC = () => {
  return (
    <section className="py-12 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 items-center">
          {/* Video Section */}
          <div className="flex justify-center w-full md:w-1/2">
            <div className="w-full h-56 md:h-72 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center text-white text-xl relative">
              <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <p className="text-white text-xl">Video</p> */}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full">
            <div className="relative flex md:flex-wrap justify-between items-center w-full gap-4 md:gap-0">
              {/* Horizontal Line */}
              <div className="absolute top-[10px] left-24 right-10 h-[1px] bg-black transform -translate-y-1/2 z-0 hidden md:block"></div>

              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col  items-center text-center relative z-10 w-1/2 md:w-auto md:flex-1">
                  {/* Dot */}
                  <div className="w-4 h-4 bg-teal-500 rounded-full mb-2 relative z-10"></div>
                  {/* Stat Value */}
                  <div className="text-xl font-bold text-teal-500 mt-2">
                    {stat.value}
                  </div>
                  {/* Stat Label */}
                  <div className="text-sm text-gray-700 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
