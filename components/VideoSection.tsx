import { FC } from 'react';
import { stats } from '@/constants';

const VideoSection: FC = () => {
  return (
    <section className="py-12 bg-white w-full">
      <div className="">
        <div className="flex flex-col gap-8 items-center ">
          {/* Video Section */}
          <div className="flex justify-center  w-full md:w-1/2 ">
            <div className="w-full h-56 md:h-72 lg:h-96 bg-blue-900 rounded-lg flex items-center justify-center text-white text-xl">
              <p>Video</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col w-full md:w-1/2 space-y-8">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="text-xl font-bold text-teal-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700">
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
