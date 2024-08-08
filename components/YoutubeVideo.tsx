"use client"
import { FC } from 'react';
import { videos } from '@/constants';

const VideoSection: FC = () => {
    return (
        <section className="py-20 px-6 md:px-0 bg-blue-90">
            <h2 className="text-4xl md:text-5xl font-medium text-center mb-12 text-white">Mantra Cast</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {videos.map((video, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-4">
                        <div className="bg-white rounded-xl border-2 overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-[500px] rounded-lg"
                                src={video}
                                title={`YouTube Short ${index}`}
                                frameBorder="0"
                                allowFullScreen
                                loading='lazy'
                                // playsInline
                                
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoSection;
