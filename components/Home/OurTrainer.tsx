import { FC } from "react";
import { trainers } from "@/constants";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TrainerCarousel: FC = () => {
  return (
    <section className="bg-blue-90 text-white py-20 px-10 md:px-0">
      <h2 className="text-4xl md:text-5xl font-medium text-center mb-12">
        Our Trainers
      </h2>
      <div className="w-full max-w-[1100px] mx-auto">
        <Carousel className="w-full ">
          <CarouselContent>
            {trainers.map((trainer, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/3 flex items-center justify-center"
              >
                <Card className=" flex flex-col  items-center justify-end bg-transparent text-black border-none ">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    width={130}
                    height={130}
                    className=" pb-4 z-30"
                  />
                  <div className="bg-[#00E0D3] pt-16 px-3 rounded-xl justify-center flex items-center flex-col -mt-[4.5vw] z-10">
                    <CardTitle className="text-2xl font-bold">
                      {trainer.name}
                    </CardTitle>

                    <CardFooter className="flex flex-col items-center">
                      <p className="mb-2">{trainer.experience}</p>
                      <p className="mb-2">{trainer.qualification}</p>
                      <p className="mb-2">{trainer.role}</p>
                      <p className="bg-transparent text-black p-2 rounded text-xl">
                        {trainer.course}
                      </p>
                    </CardFooter>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 transform -translate-y-1/2 top-1/2 -ml-8 text-white" />
          <CarouselNext className="absolute right-0 transform -translate-y-1/2 top-1/2 -mr-8 text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default TrainerCarousel;
