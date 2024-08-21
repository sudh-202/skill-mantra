"use client";

import Image from 'next/image';
import ContactForm from "@/components/ContactForm";
import { patnerdata, partnersimg } from "@/constants";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Partners = () => {
    return (
        <section className='bg-blue-90  py-[5vw]'>
            <div className='flex flex-col justify-center items-center  px-8'>
                <h2 className='text-white lg:text-7xl text-4xl mb-4'>Our Partners</h2>
                <p className='text-white italic font-semibold mb-5 md:text-start text-center'>One Of The Best-Recognized Virtual Learning Institutes Helps Individuals Reach Their Goals.</p>
            </div>
            <div className=" overflow-hidden bg-[#fffffff0] translate-y-[5vw] md:translate-y-0  z-50">
                <div className="flex flex-nowrap animate-scroll hover:animate-pause gap-2">
                    {[...partnersimg, ...partnersimg].map((partner, index) => (
                        <div key={index} className="flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6">
                            <Image
                                src={partner.image}
                                alt={partner.alt}
                                width={120}
                                height={120}
                                className="object-contain overflow-hidden "
                            />
                        </div>
                    ))}
                </div>
            </div>
            <main className='flex md:flex-row flex-col justify-center items-center gap-32 px-[10vw] md:px-[]'>
             <div className='flex flex-col  translate-y-[6rem] '>
                <div className="flex pb-[2vw] ">
                    <div className="flex flex-col ">
                        {patnerdata.subsections.map((subsection, index) => (
                            <div key={index} className="flex justify-start  ">
                                <span className="italic text-xl md:text-3xl lg:text-4xl text-white font-semibold flex text-left mb-4">{subsection.title}</span>
                                <p className=" md:ml-4 font-semibold text-white">{subsection.para}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    {patnerdata.sections.map((section, index) => (
                        <div key={index} className="flex items-center">
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
                            alt="arrow"
                            width={40}
                            height={100}
                            className="relative top-[-200px] z-10 hidden lg:block translate-x-[32rem]"
                        />
                        
                    </div>
                </div>

               
                </div>


                <div >
                    <ContactForm />

                </div>

            </main>
        </section>
    );
};

export default Partners;
