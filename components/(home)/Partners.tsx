"use client";

import Image from 'next/image';
import ContactForm from "@/components/ContactForm";
import { patnerdata, partnersimg } from "../../constants";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Partners = () => {
    return (
        <section className='z-10'>
            <div className='flex flex-col justify-center items-center lg:pt-24 px-8 pt-10'>
                <h2 className='text-white lg:text-7xl text-4xl mb-4'>Our Partners</h2>
                <p className='text-white italic font-semibold mb-5 md:text-start text-center'>One Of The Best-Recognized Virtual Learning Institutes Helps Individuals Reach Their Goals.</p>
            </div>
            <div className="relative overflow-hidden bg-[#fffffff0] py-5 z-50">
                <div className="flex flex-nowrap animate-scroll hover:animate-pause gap-2">
                    {[...partnersimg, ...partnersimg].map((partner, index) => (
                        <div key={index} className="flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6">
                            <Image
                                src={partner.image}
                                alt={partner.alt}
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-container padding-container flex flex-col lg:gap-20 xl:gap-24 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#21355C] lg:px-14 bg-contain relative">
                <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                    <div className="mt-8">
                        {patnerdata.subsections.map((subsection, index) => (
                            <div key={index} className="flex items-center mb-2 justify-center lg:justify-start lg:items-start">
                                <span className="italic text-xl md:text-3xl lg:text-4xl text-white font-semibold flex text-left mb-4">{subsection.title}</span>
                                <p className=" ml-4 font-semibold text-white">{subsection.para}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        {patnerdata.sections.map((section, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <Image src="/icons/tick.webp" alt="icon" width={84} height={84} className="w-[64px] h-[64px]" />
                                <span className="text-lg md:text-xl lg:text-2xl text-white font-semibold">{section.title}</span>
                            </div>
                        ))}
                        <div>
                            <Button asChild className="bg-[#FFC224] py-8 px-8 text-2xl rounded-xl text-blue-90 flex justify-center items-center lg:w-[50%] mt-5">
                                <Link href="/login">Know More</Link>
                            </Button>
                            <Image
                                src="/icons/arrow.webp"
                                alt="circle"
                                width={40}
                                height={100}
                                className="absolute lg:right-[-25px] right-[-16px] lg:top-[350px] top-[250px] z-0 "
                            />
                        </div>
                    </div>

                    <Image
                        src="/icons/dots.webp"
                        alt="dots"
                        width={100}
                        height={100}
                        className="absolute left-[60px] top-[700px] z-10 hidden lg:block"
                    />
                </div>

                <div className="relative z-10 pt-10  flex-col  ">
                    <ContactForm />

                </div>
            </div>
        </section>
    );
};

export default Partners;
