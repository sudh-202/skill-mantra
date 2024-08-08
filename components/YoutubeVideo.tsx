"use client"

import { FC, useState } from 'react';
import { videos } from '@/constants';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const VideoSection: FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 md:px-0 bg-blue-90">
      <h2 className="text-4xl md:text-5xl font-medium text-center mb-12 text-white">Mantra Cast</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video) => (
          <Card 
            key={video.id} 
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 cursor-pointer"
            onClick={() => setSelectedVideo(video.url)}
          >
            <CardContent className="p-4">
              <Image 
                src={video.thumbnail} 
                alt={video.title} 
                width={360} 
                height={202} 
                className="rounded-lg object-cover w-full h-auto" 
              />
              <h3 className="mt-4 text-xl font-semibold text-center text-white">{video.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden relative w-full max-w-3xl mx-auto">
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="500"
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
