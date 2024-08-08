"use client";

import Image from 'next/image';
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

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            city: "",
            emailAddress: "",
            accountType: "student", // Ensure default value matches your enum
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
        <>
            {/* <Image
                src="/circle.webp"
                alt="circle"
                width={1000}
                height={100}
                className="absolute right-[-350px] top-[-330px]  hidden lg:block z-[-10]"
            /> */}
            <div className="flex flex-col items-center justify-between lg:p-14 p-8 bg-white rounded-2xl z-90">
                <h1 className="lg:text-4xl text-2xl font-bold mb-6 text-blue-90">Enroll for Free Courses</h1>
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
                                    <FormLabel>I am a</FormLabel>
                                    <Select value={field.value} onValueChange={field.onChange}>
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

            </div>
        </>
    );
};

export default ContactForm;
