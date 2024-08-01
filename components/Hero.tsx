"use client";

import Image from 'next/image';
import { data } from "../constants";
import Link from 'next/link';
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
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
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from 'react-toastify';

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(1, "City is required"),
  emailAddress: z.string().email("Invalid email address"),
  accountType: z.enum(["student", "Working Professional", "CA/CS Pursuing", "Govt Job Preparation"]),
  companyName: z.string().optional(),
});

const Hero = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      emailAddress: "",
      companyName: "",
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (values) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message); // Show success message
      } else {
        toast.error(result.message); // Show error message
      }
    } catch (error) {
      toast.error('Unexpected error occurred'); // Handle unexpected errors
    }
  };

  return (
    <section className="max-container padding-container flex flex-col lg:gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#21355C]">
      <Image
        src="/circle.webp"
        alt="circle"
        width={1000}
        height={100}
        className="absolute right-[-555px] top-[-530px] z-0 "
      />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <div className="flex flex-col">
          {data.sections.map((section, index) => (
            <div key={index} className="flex items-center mb-4">
              <Image src="/icons/tick.webp" alt="icon" width={84} height={84} className="w-[64px] h-[64px]" />
              <span className="text-xl md:text-3xl lg:text-5xl font-abril ml-4 font-semibold text-white">{section.title}</span>
            </div>
          ))}
          <div>
            <Button asChild className="bg-[#FFC224] py-8 px-8 text-2xl rounded-xl text-blue-90 flex justify-center items-center lg:w-[60%]">
              <Link href="/login">Download Prospectus</Link>
            </Button>
          </div>
        </div>
        <div className="mt-8">
          {data.subsections.map((subsection, index) => (
            <div key={index} className="flex items-center mb-2 justify-center lg:justify-start lg:items-start">
              <span className="text-xl md:text-3xl lg:text-4xl text-white font-semibold">{subsection.title}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 md:gap-10 mt-6 flex-col lg:flex-row">
          {data.stats.map((stat, index) => (
            <div key={index} className="w-full md:w-auto text-start mb-2 md:mb-0 flex lg:flex-col gap-4 lg:gap-2">
              <div className="text-xl md:text-3xl lg:text-5xl font-bold text-white">{stat.percentage}</div>
              <div className="text-sm md:text-base lg:text-lg text-white">{stat.description}</div>
              <Image
                src="/icons/arrow.webp"
                alt="circle"
                width={40}
                height={100}
                className="absolute right-[-15px] top-[330px] z-0 "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between lg:p-14 p-8 bg-white rounded-2xl z-10">
        <h1 className="lg:text-4xl text-2xl font-bold mb-6 text-blue-90">Enroll for free Courses</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="lg:max-w-xl w-full flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="8561718721" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@gmail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I am a </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Student" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="Working Professional">Working Professional</SelectItem>
                      <SelectItem value="CA/CS Pursuing">CA/CS Pursuing</SelectItem>
                      <SelectItem value="Govt Job Preparation">Govt Job Preparation</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("accountType") === "Working Professional" && (
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City/State</FormLabel>
                  <FormControl>
                    <Input placeholder="Mumbai" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-blue-90 text-white mt-4">
              Submit
            </Button>
          </form>
        </Form>
        <Image
          src="/icons/dots.webp"
          alt="circle"
          width={100}
          height={100}
          className="absolute left-[60px] top-[690px] z-10 hidden lg:block"
        />
      </div>
    </section>
  );
};

export default Hero;
