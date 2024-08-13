import { FC } from 'react';
import { stats } from '@/constants';
import Image from 'next/image';

const YoutubeVideo: FC = () => {
    return (
        
        <section className="py-12 bg-white w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-8 items-center justify-between">
                    {/* Video Section */}
                    <div className="flex justify-center items-center w-full md:w-1/2">
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

                            <Image src="/stats.webp" alt='stats' width={1200} height={100}/>   

                </div>
            </div>
        </section>
    );
};

export default YoutubeVideo;
