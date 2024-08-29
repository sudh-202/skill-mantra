import React, { useState } from 'react';
import * as z from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { accountTypes } from '@/constants';
import Loader from '@/components/ui/Loader';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  emailAddress: z.string().email('Invalid email address'),
  accountType: z.enum([
    'student',
    'Working Professional',
    'CA/CS Pursuing',
    'Govt Job Preparation',
  ]),
  city: z.string().min(1, 'City is required'),
  reason: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CounselingForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      emailAddress: '',
      accountType: 'student',
      city: '',
      reason: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setLoading(true); // Show loader
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Unexpected error occurred');
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6 text-center">
        Enroll for Free Counseling
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        {/* Name Field */}
        <div className="flex flex-col text-black">
        
          <input
            id="name"
            {...register('name')}
            placeholder="Name"
            className={`p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="flex flex-col">
          {/* <label htmlFor="phone" className="text-gray-700">Phone No.</label> */}
          <input
            id="phone"
            {...register('phone')}
            placeholder="Phone No."
            className={`p-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Email Address Field */}
        <div className="flex flex-col">
          {/* <label htmlFor="emailAddress" className="text-gray-700">Email ID</label> */}
          <input
            id="emailAddress"
            {...register('emailAddress')}
            type="email"
            placeholder="Email ID"
            className={`p-2 border rounded ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.emailAddress && <p className="text-red-500 text-sm">{errors.emailAddress.message}</p>}
        </div>

        {/* Account Type Field */}
        <div className="flex flex-col">
          {/* <label htmlFor="accountType" className="text-gray-700">I am a:</label> */}
          <select
            id="accountType"
            {...register('accountType')}
            className={`p-2 border rounded ${errors.accountType ? 'border-red-500' : 'border-gray-300'}`}
          >
            {accountTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.accountType && <p className="text-red-500 text-sm">{errors.accountType.message}</p>}
        </div>

        {/* City Field */}
        <div className="flex flex-col">
          {/* <label htmlFor="city" className="text-gray-700">City/State</label> */}
          <input
            id="city"
            {...register('city')}
            placeholder="City/State"
            className={`p-2 border rounded ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* Reason Field */}
        {/* <div className="flex flex-col">
          <label htmlFor="reason" className="text-gray-700">Reason (optional)</label>
          <input
            id="reason"
            {...register('reason')}
            placeholder="Reason (optional)"
            className="p-2 border rounded border-gray-300"
          />
        </div> */}

        {/* Submit Button and Loader */}
        <div className="flex items-center gap-2 mt-4">
          <button
            type="submit"
            className="bg-blue-90 text-white px-4 py-2 rounded flex-1"
          >
            Submit
          </button>
          {loading && <Loader className="ml-2" />}
        </div>
      </form>
    </div>
  );
};

export default CounselingForm;
