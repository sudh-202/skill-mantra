"use client";

import Image from 'next/image';
import ContactForm from "@/components/ContactForm"; // Adjust the path if necessary
import { data } from "@/constants";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const FormSection = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[5.5vw] bg-blue-90 p-[4.5vw] md:p-[4.5vw]"> 
            <div className="w-full md:w-[40vw] mb-8 md:mb-0">
                <span className="text-[10vw] md:text-[3.8vw] leading-[12vw] md:leading-[5vw] text-white md:text-left text-center block">
                    Want to take a customised counselling before enrolling?
                </span>
                <div className="flex flex-col md:flex-row gap-5 mt-[5vw]">
                    <Button asChild className="bg-white py-4 md:py-8 px-6 md:px-8 text-[4vw] md:text-[1.5vw] rounded-xl text-blue-90 flex justify-center items-center ">
                        <Link href="/login">Download Prospectus</Link>
                    </Button>
                    <Button asChild className="bg-[#00E0D3] py-4 md:py-8 px-6 md:px-8 text-[4vw] md:text-[1.5vw] rounded-xl text-blue-90 flex justify-center items-center ">
                        <Link href="/login">Download Prospectus</Link>
                    </Button>
                </div>
            </div>

            <div className="w-full md:w-auto">
                <ContactForm />
            </div>
        </section>
    );
};

export default FormSection;
