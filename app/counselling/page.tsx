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
            <section className="py-12 px-[1vw] bg-white">
                <h2 className="text-[4vw] font-bold text-center text-gray-800 mb-8">
                    What is covered in the counselling session:
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-blue-90 rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 p-4"
                        >
                            <div className="w-full h-48 flex items-center justify-center text-white text-6xl">
                                <card.icon />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-center text-white">{card.title}</h3>
                                <p className="text-sm text-center text-gray-300 mt-2 whitespace-pre-line">
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