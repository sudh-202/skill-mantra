"use client";

import Image from 'next/image';
import ContactForm from "@/components/ContactForm"; // Adjust the path if necessary
import { data } from "@/constants";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const FormSection = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-[15vw]  bg-blue-90 md:px-[4vw] px-[5vw]  py-[15vw] md:py-[4vw] space-x-[18%] md:space-x-[0%]"> 
            <div className="w-full md:w-[40vw] mb-8 md:mb-0 z-20">
                <span className="md:text-[4.8vw] text-[7vw] md:leading-[6vw] leading-[7vw] text-white md:text-left text-center block z-20">
                    Want to take a customised counselling before enrolling?
                </span>
                <div className="flex flex-col md:flex-row gap-5 mt-[5vw] md:w-full w-1/2 translate-x-[50%] md:translate-x-0">
                    <Button asChild className="bg-white py-4 md:py-8 px-6 md:px-8 text-[3vw] md:text-[1.5vw] rounded-xl text-blue-90 flex justify-center items-center ">
                        <Link href="/login"> DOWNLOAD BROCHURE</Link>
                    </Button>
                    <Button asChild className="bg-[#00E0D3] py-4 md:py-8 px-6 md:px-8 text-[3vw] md:text-[1.5vw] rounded-xl text-blue-90 flex justify-center items-center uppercase">
                        <Link href="/login">Apply Now</Link>
                    </Button>
                </div>
            </div>

            <div className="w-full md:w-auto flex items-center -translate-y-[10vw] md:-translate-y-[0vw]">
                <ContactForm />
            </div>
        </section>
    );
};

export default FormSection;
