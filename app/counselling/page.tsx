import Hero from "@/components/Home/Hero";
import VideoSection from "@/components/Home/VideoSection";
import { cardsData } from '@/constants';
interface CardProps {
    title: string;
    description: string;
    image: string;
}

const Counseliing = () => {
    return (
        <>
            <Hero />
            <VideoSection />
            <section className="py-12 px-[1vw] bg-white border-gray-10 border-b-2">
                <h2 className="md:text-[4vw]  text-[7vw] font-bold text-center text-gray-800 mb-8">
                    What is covered in the counselling session:
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-blue-90 rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 p-4"
                        >
                            <div className="w-full md:p-[2vw]  flex items-center justify-center text-white md:text-[6vw] text-[20vw]">
                                <card.icon />
                            </div>
                            <div className="my-4">
                                <h3 className="md:text-[1.5vw] text-[7vw] font-semibold text-center text-white">{card.title}</h3>
                                <p className=" text-lg  text-center text-gray-300 mt-2 whitespace-pre-line">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}

export default Counseliing;