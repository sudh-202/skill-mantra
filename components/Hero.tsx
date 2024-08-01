"use client";

import Image from 'next/image';
import ContactForm from "@/components/ContactForm"; // Adjust the path if necessary
import { data } from "../constants";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="max-container padding-container flex flex-col lg:gap-20 xl:gap-24 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#21355C]">
             
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            
                <div className="flex flex-col">
                    {data.sections.map((section, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <Image src="/icons/tick.webp" alt="icon" width={84} height={84} className="w-[64px] h-[64px]" />
                            <span className="text-xl md:text-3xl lg:text-5xl font-abril ml-4 font-semibold text-white">{section.title}</span>
                        </div>
                    ))}
                    <div>
                        <Button asChild className="bg-[#FFC224] py-8 px-8 text-2xl rounded-xl text-blue-90 flex justify-center items-center lg:w-[60%]">
                            <Link href="/login">Download Prospectus</Link>
                        </Button>
                    </div>
                </div>
                <div className="mt-8">
                    {data.subsections.map((subsection, index) => (
                        <div key={index} className="flex items-center mb-2 justify-center lg:justify-start lg:items-start">
                            <span className="text-xl md:text-3xl lg:text-4xl text-white font-semibold">{subsection.title}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 md:gap-2 mt-6 flex-col lg:flex-row">
                    {data.stats.map((stat, index) => (
                        <div key={index} className="w-full md:w-auto text-start mb-2 md:mb-0 flex lg:flex-col gap-4 lg:gap-2">
                            <div className="text-xl md:text-3xl lg:text-4xl font-bold text-white">{stat.percentage}</div>
                            <div className="text-sm md:text-base lg:text-lg text-white w-[70%]">{stat.description}</div>
                            <Image
                                src="/icons/arrow.webp"
                                alt="circle"
                                width={40}
                                height={100}
                                className="absolute right-[-65px] top-[350px] z-0 "
                            />
                        </div>
                    ))}
                </div>
                <Image
                src="/icons/dots.webp"
                alt="circle"
                width={100}
                height={100}
                className="absolute left-[60px] top-[630px] z-10 hidden lg:block"
            />
            </div>

            <div className="relative z-20   flex-col  ">
                <ContactForm />
                
            </div>
        </section>
    );
};

export default Hero;
