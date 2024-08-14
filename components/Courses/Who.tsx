import Image from "next/image";
const WhyCourse = () => {
    return ( 
        <main className="w-full h-[70vh] flex justify-center items-center px-[15vh] bg-yellow-50 gap-24">
          <p className="font-semibold">At Skill Mantra, we are dedicated to empowering individuals with the practical skills and knowledge needed to excel in today’s competitive job market. Specialising in short-term, job-oriented courses, we bridge the gap between academic learning and real-world demands. Our mission is to equip our students with industry-relevant expertise, ensuring they are job-ready from day one. With a focus on fields like accounting, HR, tax, and financial modelling, we provide hands-on training and career support to help you succeed in your chosen profession.</p>
          <Image src="../courses/who.webp" alt="who" width={300} height={100}/>
        </main>
     );
}
 
export default WhyCourse;