import Image from "next/image";
import { toolsImage } from "@/constants";

const Tools = () => {
    return (
        <main className="bg-[url('/courses/bg-section.webp')] bg-cover w-full h-[60vh] flex flex-row text-white items-center justify-center px-[10vw]">
            <h1 className="text-[8vw] leading-[8vw] text-left">Tools &<br /> Platform</h1>
            <Image
                src="/courses/line.webp"
                alt="line"
                width={100}
                height={100}
                className="w-[20vw] h-[.1vw] rotate-90 my-4"
                loading="lazy"
            />
            <div className="flex flex-wrap justify-center gap-10 w-[20vw]">
                {toolsImage.map((feature, index) => (
                    <Image
                        key={index}
                        src={feature.img}
                        alt={feature.alt}
                        className="h-[6vw] w-[7vw] mb-4"
                        width={100}
                        height={100}
                    />
                ))}
            </div>
        </main>
    );
};

export default Tools;
