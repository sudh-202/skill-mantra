import React from 'react';
import { DEGREE_DATA } from '@/constants';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Image from 'next/image';

const DegreeComparison: React.FC = () => {
  return (
    <div className="p-4 bg-white py-24 flex items-center justify-center flex-col relative">
      <Image
        src="/circle2.webp"
        alt="circle"
        width={750}
        height={100}
        className="absolute -right-[30%] -translate-y-[25%] hidden md:block  "
      />
      <h1 className="text-5xl font-bold text-center mb-4">{DEGREE_DATA.title}</h1>
      <p className="text-center mb-8">{DEGREE_DATA.subtitle}</p>
      <div className=" w-full max-w-5xl">

        <div className="overflow-x-auto ">
          <table className="min-w-full  ">
            <thead className=''>
              <tr className=''>
                <th className="px-4 py-2 text-left border border-black bg-[#FFC224]">Feature</th>
                <th className="px-4 py-2 text-center border border-black bg-[#BDFFFC]">Traditional</th>
                <th className="px-4 py-2 text-center border bg-blue-90 text-white">Smart</th>
              </tr>
            </thead>
            <tbody>
              {DEGREE_DATA.rows.map((row, index) => (
                <tr key={index} className="text-center ">
                  <td className="border border-black px-4 py-2 text-left bg-[#FFC224]">{row.label}</td>
                  <td className="border border-black px-4 py-2 bg-[#BDFFFC]">
                    {row.traditional ? (
                      <FaCheckCircle className="text-green-500 mx-auto" />
                    ) : (
                      <FaTimesCircle className="text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="border px-4 py-2 bg-blue-90">
                    {row.smart ? (
                      <FaCheckCircle className="text-green-500 mx-auto" />
                    ) : (
                      <FaTimesCircle className="text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DegreeComparison;
