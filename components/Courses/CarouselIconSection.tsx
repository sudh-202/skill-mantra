import { FC } from "react";
import { carouselItems } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselIconSection: FC = () => {
    return (
        <section className="py-12 ">
            <div className="container mx-auto px-[2vw] ">
                <Carousel>
                    <CarouselContent className="">
                        {carouselItems.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className={`md:basis-1/2 lg:basis-1/3 px-[3vw]  ${item.bgColor}`}
                            >
                                <Card className="h-full py-[.125vw] border-w-2 border-blue-90">
                                    <CardContent className="flex flex-col items-center  justify-center h-full text-center ">
                                        <div className="mb-4 text-4xl text-white ">
                                            <item.icon className="w-[10vh] h-[10vh] bg-blue-90 rounded-full p-4"/>
                                        </div>
                                        <h3 className="text-[2vw] font-semibold pb-2">{item.title}</h3>
                                        <p className="text-[1vw]">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};

export default CarouselIconSection;
