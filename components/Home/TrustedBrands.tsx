import React from 'react';
import { TRUSTED_BRANDS } from '@/constants';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Image from 'next/image';

const TrustedBrands: React.FC = () => {
  return (
    <div className="bg-white py-20 px-4  border-b-[1px] border-grey">
      <h2 className="md:text-[5vw] text-[8vw] font-abril ml-4 font-semibold text-center mb-5 md:mb-12">Ratings section from various portals</h2>
      <div className="flex flex-col md:flex-row  justify-center items-center md:gap-[10vw] gap-[7vw] px-[6vw]">
        {TRUSTED_BRANDS.map((brand, index) => (
          <div key={index} className="flex items-center justify-between w-full sm:w-auto ">
            <div className="flex items-center gap-5">
              <span className="bg-blue-90 text-white px-2 py-1 rounded-md text-sm font-bold">{brand.rating}</span>
              <Image src={brand.image} alt={brand.name} className="md:w-52 md:h-18 md:mx-2" width={100} height={100}/>
            </div>
            <div className="flex items-center ml-4 text-3xl">
              {Array.from({ length: Math.floor(brand.stars) }, (_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              {brand.stars % 1 !== 0 && <FaStarHalfAlt className="text-yellow-500" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBrands;
