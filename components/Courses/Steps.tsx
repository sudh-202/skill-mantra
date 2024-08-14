import React from "react";
import { cn } from "@/lib/utils"; // Ensure this import is correct
import { stepsData } from "@/constants"; // Adjust the path as necessary

const Steps: React.FC = () => {
    return (
        <main className="flex flex-col justify-center items-center bg-blue-90 py-[3vw]">
            <h1 className="text-[4vw] font-semibold text-white pb-[2vw]">Program Cycle</h1>
            <h2 className="text-white text-[2vw] pb-[2vw]">
                There are 3 simple steps in the Program Cycle which are detailed below:
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mt-8">
                {stepsData.map((stepData, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div
                            className={cn(
                                "flex items-center justify-center rounded-full w-[10vw] h-[10vw] text-white border-2 text-[2vw]",
                                stepData.color === "#06b6d4" ? "bg-cyan-500" : "",
                                stepData.color === "#1e3a8a" ? "bg-blue-90" : "",
                                stepData.color === "#f59e0b" ? "bg-yellow-500" : ""
                            )}
                        >
                            {stepData.step}
                        </div>
                        <p className="mt-4 font-medium text-[1.2vw] text-white">{stepData.title}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Steps;
