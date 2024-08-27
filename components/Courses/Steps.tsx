import React from "react";
import { cn } from "@/lib/utils"; // Ensure this import is correct
import { stepsData } from "@/constants"; // Adjust the path as necessary

const Steps: React.FC = () => {
    return (
        <main className="flex flex-col justify-center items-center bg-yellow-50 md:py-[3vw] py-[5vw] px-[6vw]">
            <h1 className="md:text-[4vw] text-[7vw] font-semibold text-blue-90 pb-[2vw]">Program Cycle</h1>
            <h2 className=" md:text-[2vw] text-[4vw] pb-[2vw] text-blue-90 text-center">
                There are 3 simple steps in the Program Cycle which are detailed below:
            </h2>
            {/* <div className="flex  flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 -space-x-4 md:mt-8 gap-10">
                {stepsData.map((stepData, index) => (
                    <div key={index} className="flex flex-col  items-center text-center">
                        <div
                            className={cn(
                                "flex items-center justify-center rounded-full md:w-[10vw] w-[25vw] h-[25vw] md:h-[10vw] text-white border-2 md:text-[2vw] ",
                                stepData.color === "#06b6d4" ? "bg-cyan-500" : "",
                                stepData.color === "#1e3a8a" ? "bg-blue-90" : "",
                                stepData.color === "#f59e0b" ? "bg-indigo-300" : ""
                            )}
                        >
                            {stepData.step}
                        </div>
                        <p className="mt-4 font-medium md:text-[1.2vw] text-[3vw] text-blue-90">{stepData.title}</p>
                    </div>
                ))}
            </div> */}
        </main>
    );
};

export default Steps;