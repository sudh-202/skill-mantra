import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { features } from "@/constants";
  import Image from "next/image";
  
  const WhyUs: React.FC = () => {
    return (
      <div className="py-10 px-2 bg-blue-90">
        <h2 className="text-6xl font-semibold text-center text-white mb-8">Why Us?</h2>
        <div className="flex flex-wrap justify-center gap-4 p-4 md:p-0">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center  text-center w-full sm:w-1/2 lg:w-1/5 bg-[#FFC224] ">
              <CardHeader>
                <Image src={feature.icon} alt={feature.title} className="h-16 w-16 mb-4" width={100} height={100} />
                <CardTitle className="text-3xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{feature.description}</p>
              </CardContent>
              {/* <CardFooter>
                <a href={feature.link} className="text-blue-500 hover:underline">
                  Learn More
                </a>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default WhyUs;
  