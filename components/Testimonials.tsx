import { FC } from 'react';
import { testimonials } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { FaStar } from 'react-icons/fa';

const TestimonialCarousel: FC = () => {
  return (
    <section className="w-full py-20 bg-blue-90 px-6 md:px-0">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-medium  text-white text-center mb-12">Testimonials</h2>
        <div className="relative w-full max-w-7xl mx-auto">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-4 h-full">
                    <Card className="h-full flex flex-col justify-between bg-white">
                      <CardContent className="flex flex-col items-center text-center p-6 h-full">
                        {/* <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mb-4"
                        /> */}
                        <p className="text-sm font-medium mb-2 text-black">
                          {testimonial.testimonial}
                        </p>
                        <div className="flex items-center justify-center my-6">
                          {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                              key={i}
                              className={`${
                                i < testimonial.rating ? "text-[#FFC224]" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <button className="bg-blue-90 text-white font-semibold py-2 px-4 rounded-full">
                          {testimonial.name}
                        </button>
                        <p className="text-sm font-light text-gray-600 mt-2">
                          {testimonial.position}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 transform -translate-y-1/2 top-1/2 -ml-8 text-white" />
            <CarouselNext className="absolute right-0 transform -translate-y-1/2 top-1/2 -mr-8 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
