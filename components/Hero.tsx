"use client";

import Image from 'next/image'
// import Button from './Button'
import { data, animals } from "../constants";
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';


import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";

const formSchema = z
  .object({
    emailAddress: z.string().email(),
    password: z.string().min(3),
    passwordConfirm: z.string(),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === "company") {
        return !!data.companyName;
      }
      return true;
    },
    {
      message: "Company name is required",
      path: ["companyName"],
    }
  );

const Hero = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
      passwordConfirm: "",
      companyName: "",
    },
  });

  const accountType = form.watch("accountType");

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };


  return (

    //   const variants = ["flat"];
    // const [value, setValue] = React.useState<string>("junior2nextui.org");

    // const validateEmail = (value: string): boolean => {
    //   return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    // };

    // const isInvalid = React.useMemo(() => {
    //   if (value === "") return false;
    //   return !validateEmail(value);
    // }, [value]);




    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#21355C]">
      {/* <div className="hero-map" /> */}

      <Image
        src="/circle.webp"
        alt="circle"
        width={1000}
        height={100}
        className="absolute right-[-555px] top-[-530px] z-0 "
      />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
        <div className="flex flex-col">
          {data.sections.map((section, index) => (
            <div key={index} className="flex items-center mb-4 ">
              <Image src="/icons/tick.webp" alt="icon" width={84} height={84} className="w-[64px] h-[64px]" />
              <span className="text-xl md:text-3xl lg:text-5xl font-abril ml-4 font-semibold text-white">{section.title}</span>
            </div>
          ))}
          <div className=''>
            <Button asChild className='bg-[#FFC224] py-8 px-8 text-2xl rounded-xl text-blue-90'>
              <Link href="/login">Download Prospectus</Link>
            </Button>



          </div>

        </div>
        <div className="mt-8">
          {data.subsections.map((subsection, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="text-xl md:text-3xl lg:text-4xl text-white font-semibold">{subsection.title}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 md:gap-10 mt-6">
          {data.stats.map((stat, index) => (
            <div key={index} className="w-full md:w-auto text-start mb-2 md:mb-0">
              <div className="text-xl md:text-3xl lg:text-5xl font-bold text-white">{stat.percentage}</div>
              <div className="text-sm md:text-base lg:text-lg text-white">{stat.description}</div>
              <Image
                src="/icons/arrow.webp"
                alt="circle"
                width={50}
                height={100}
                className="absolute right-[-15px] top-[330px] z-0 "
              />
            </div>

          ))}
        </div>


        {/* <h1 className="bold-52 lg:bold-88">Corporate Accounting</h1> */}
        {/* <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p> */}

        <div className="my-11 flex flex-wrap gap-5">
          {/* <div className="flex items-center gap-2">
          {Array(5).fill(1).map((_, index) => (
            <Image
              src="/star.svg"
              key={index}
              alt="star"
              width={24}
              height={24}
            />
          ))}
        </div> */}


          {/* <p className="bold-16 lg:bold-20 text-blue-70">
          198k
          <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
        </p> */}
        </div>

        {/* <div className="flex flex-col w-full gap-3 sm:flex-row">
        <Button
          type="button"
          title="Download App"
          variant="btn_green"
        />
        
        <Button
          type="button"
          title="How we work?"
          icon="/play.svg"
          variant="btn_white_text"
        />
      </div> */}

      </div>

      {/* <div className="relative flex flex-1 items-start">
      <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

        <div className="flex flex-col">
          <div className="flexBetween">
            <p className="regular-16 text-gray-20">Location</p>
            <Image src="/close.svg" alt="close" width={24} height={24} />
          </div>
          <p className="bold-20 text-white">Aguas Calientes</p>
        </div>

        <div className="flexBetween">
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-20">Distance</p>
            <p className="bold-20 text-white">173.28 mi</p>
          </div>
          <div className="flex flex-col">
            <p className="regular-16 block text-gray-20">Elevation</p>
            <p className="bold-20 text-white">2.040 km</p>
          </div>
        </div>
      </div>
    </div> */}


      {/* Form */}
      <div className="flex flex-col items-center justify-between lg:p-14 bg-white rounded-2xl z-10">
        <h1 className='text-4xl font-bold mb-6 text-blue-90'>Enroll for free Courses</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="lg:max-w-xl w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Account type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {accountType === "company" && (
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Company name</FormLabel>
                      <FormControl>
                        <Input placeholder="Company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            )}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password confirm</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password confirm"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit" className="w-full bg-blue-90 text-white mt-4">
              Submit
            </Button>
          </form>
        </Form>
      </div>

    </section>
  )
}

export default Hero