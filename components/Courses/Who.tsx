import Image from "next/image";
const WhyCourse = () => {
    return ( 
        <main className="w-full md:h-[70vh] flex justify-center items-center md:px-[15vh] px-[5vw] md:py-0 py-[5vw]  bg-[#AABDE1] gap-24  overflow-hidden flex-col-reverse md:flex-row">
           <Image
                src="/circle.webp"
                alt="circle"
                width={750}
                height={100}
                className="absolute -left-[500px] translate-y-[10vw]  hidden md:block"
            /> 
          <p className="font-semibold md:p-0 p-[10vw] md:text-left text-center">At Skill Mantra, we are dedicated to empowering individuals with the practical skills and knowledge needed to excel in today’s competitive job market. Specialising in short-term, job-oriented courses, we bridge the gap between academic learning and real-world demands. Our mission is to equip our students with industry-relevant expertise, ensuring they are job-ready from day one. With a focus on fields like accounting, HR, tax, and financial modelling, we provide hands-on training and career support to help you succeed in your chosen profession.</p>
          <div className="flex flex-col justify-center items-center">
          <Image src="../courses/who.webp" alt="who" width={1200} height={100}/>
          </div>
        </main>
     );
}
 
export default WhyCourse;