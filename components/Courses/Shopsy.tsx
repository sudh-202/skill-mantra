import Image from "next/image";

const Shopsy = () => {
    return ( 
        <main className="w-full h-[85vh] px-[10vw] flex bg-[url('/courses/grid.webp')] flex-wrap overflow-hidden">
            <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-black font-medium text-[3vw] text-center leading-[3vw]">Our </h2>
            <h3 className="text-blue-90 font-bold text-[5vw] text-center leading-[7vw]">Finance Partner</h3>
            <Image src="../courses/shopselogo.webp" alt="shopsylogo" width={500} height={140} className="object-contain py-5"  loading='lazy'/>
            <p className="py-[2vw] px-[15vw] font-semibold">With Our Finance Partner, You Can Now Enjoy Easy And Affordable Payment Options, Making Quality Education More Accessible Than Ever Which Ensures Financial Flexibility Without Any Hassle. Discover The Benefits Of Our New EMI Plans And Take The Next Step In Your Learning Journey With Confidence.​</p>
            </div>
        </main>
     );
}
 
export default Shopsy;