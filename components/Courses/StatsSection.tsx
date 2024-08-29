import React from "react";
import { statsData } from "@/constants";
import Image from "next/image";

const StatsSection: React.FC = () => {
    return (
        <section className="py-12 bg-white relative z-[-10]">
            <Image
                src="/icons/dots.webp"
                alt="dots"
                width={100}
                height={100}
                className="absolute left-[10vw] -top-[5vw] z-10 hidden md:block"
                loading='lazy'
            />
            <h2 className="text-[10vw] md:text-[3.4vw]   text-blue-90 text-center my-12 md:pl-12 font-semibold ">
                A Mantra For Your Dreams
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {statsData.map((stat) => (
                    <div key={stat.id} className="text-center">
                        <img
                            src={stat.imageUrl}
                            alt={stat.description}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <p className="md:text-[2.5vw] text-[10vw] font-bold text-black">{stat.value}</p>
                        <p className="md:text-[1.5vw] text-[7vw] text-black">{stat.description}</p>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default StatsSection;
