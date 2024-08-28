import { FC } from "react";
import { carouselItems, durationMap } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselIconSectionProps {
  courseSlug: string;
}

const CarouselIconSection: FC<CarouselIconSectionProps> = ({ courseSlug }) => {
  const updatedItems = carouselItems.map((item) => {
    if (item.title === "Program Structure") {
      return {
        ...item,
        description: `A ${
          durationMap[courseSlug] || "30+"
        } hour journey of focused learning through theory and practice.`,
      };
    }
    return item;
  });

  return (
    <section className="py-12 overflow-hidden border-b-2 border-blue-10 bg-[url('/courses/lab.webp')] bg-no-repeat bg-cover bg-center bg-opacity-50 relative">
      <div className="container mx-auto md:px-[2vw]">
        <Carousel>
          <CarouselContent className="relative">
            {updatedItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 md:px-[3vw] px-[10vw] cursor-grab"
              >
                <Card className="h-full py-[.125vw] border-w-2 border-blue-90 bg-white">
                  <CardContent className="flex flex-col items-center justify-center h-full text-center">
                    <div className="mb-4 text-4xl text-white">
                      <item.icon className="w-[10vh] h-[10vh] bg-blue-90 rounded-full p-4" />
                    </div>
                    <h3 className="text-[2vw] font-semibold pb-2">
                      {item.title}
                    </h3>
                    <p className="text-[1vw]">{item.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 md:w-[8vh] md:h-[8vh] border-[5px] border-white text-white bg-blue-90 rounded-full flex items-center justify-center cursor-pointer" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 md:w-[8vh] md:h-[8vh] border-[5px] border-white text-white bg-blue-90 rounded-full flex items-center justify-center cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselIconSection;
