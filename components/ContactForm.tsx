"use client";

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
import { accountTypes } from "@/constants";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  emailAddress: z.string().email("Invalid email address"),
  accountType: z.enum([
    "student", 
    "Working Professional", 
    "CA/CS Pursuing", 
    "Govt Job Preparation"
  ]),
  city: z.string().min(1, "City is required"),
  reason: z.string().optional(),
});

const CounselingForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      emailAddress: "",
      accountType: "student", // Ensure default value matches your enum
      city: "",
      reason: "",
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (values) => {
    try {
      const response = await fetch('/api/counseling', {
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
    <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6 text-center">Enroll for Free Counseling</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full flex flex-col gap-4">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Name" 
                    {...field} 
                    className="text-black" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Phone No." 
                    {...field} 
                    className="text-black" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email Address Field */}
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email ID"
                    type="email"
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Account Type Field */}
          <FormField
            control={form.control}
            name="accountType"
            render={({ field }) => (
              <FormItem>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="I am a:" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {accountTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* City/State Field */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="City/State" 
                    {...field} 
                    className="text-black" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Reason Field */}
          
          <Button type="submit" className="w-full bg-blue-90 text-white mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CounselingForm;
