import React from 'react';
import Image from 'next/image';
import { companiesimg } from '../constants';

const Companies: React.FC = () => {
    return (
        <div className='w-full bg-white md:py-12 px-4 lg:px-12 py-12'>
        <h2 className="text-3xl md:text-5xl font-bold  text-blue-90 text-center mb-12 pl-12">Trusted by 200+ Companies Worldwide</h2>
        <div className="flex flex-col md:flex-row items-center container mx-auto ">
            
            {/* Left side with logos */}
            <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
                
                {/* <p className="text-gray-700 mb-8">Dedicated Career Services team to help find your dream company.</p> */}

                {/* First Line of Logos Moving Left to Right */}
                <div className="overflow-hidden w-full mb-8">
                    <div className="flex animate-marquee gap-7">
                        {companiesimg.concat(companiesimg).map((company, index) => (
                            <div key={index} className="flex-none flex justify-center items-center">
                                <Image src={company.logo} alt={company.name} width={140} height={140} className="object-contain"  loading='lazy'/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Line of Logos Moving Right to Left */}
                <div className="overflow-hidden w-full mb-8">
                    <div className="flex animate-marquee-reverse gap-7">
                        {companiesimg.concat(companiesimg).map((company, index) => (
                            <div key={index} className="flex-none  flex justify-center items-center">
                                <Image src={company.logo} alt={company.name} width={140} height={140} className="object-contain"  loading='lazy'/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                    <a href="/contact">Contact Us</a>
                </Button> */}
            </div>

            {/* Right side with image */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <Image
                    src="/companies-logos/company.webp"
                    alt="Placement Image"
                    width={500}
                    height={500}
                    className="rounded-lg"
                    loading='lazy'
                />
            </div>
        </div>
        </div>
    );
};

export default Companies;
