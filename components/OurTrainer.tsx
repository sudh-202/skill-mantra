import { FC } from 'react';
import { trainers } from '@/constants';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TrainerCarousel: FC = () => {
  return (
    <section className='bg-white py-20 px-10 md:px-0'>
      <h2 className='text-4xl md:text-5xl font-medium text-center mb-12'>Our Trainers</h2>
      <div className="relative w-full max-w-7xl mx-auto">
        <Carousel className='relative w-full'>
          <CarouselContent>
            {trainers.map((trainer, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/3">
                <div className="p-4 h-full flex justify-center items-center">
                  <Card className="h-full w-full flex flex-col justify-between bg-blue-90 text-white">
                    <CardContent className="flex flex-col items-center text-center p-6 h-full">
                      <Image 
                        src={trainer.image} 
                        alt={trainer.name} 
                        width={100} 
                        height={100} 
                        className="w-32 h-32 rounded-full object-cover mb-4 border-white border-2" 
                      />
                      <h2 className="text-2xl font-bold pb-2">{trainer.name}</h2>
                      <p>{trainer.experience}</p>
                      <p>{trainer.qualification}</p>
                      <p>{trainer.role}</p>
                      <button className="mt-2 bg-[#FFC224] text-black p-2 rounded text-sm">
                        {trainer.course}
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 transform -translate-y-1/2 top-1/2 -ml-8 text-blue-90" />
          <CarouselNext className="absolute right-0 transform -translate-y-1/2 top-1/2 -mr-8 text-blue-90" />
        </Carousel>
      </div>
    </section>
  );
};

export default TrainerCarousel;
