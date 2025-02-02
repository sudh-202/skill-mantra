'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ id, imgUrl, title, description, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      width={100}
      height={100}
      className="absolute w-full h-full object-cover rounded-[24px] opacity-60"
    />
    {active !== id ? (
      <h3 className=" text-[26px] md:text-[2.5vw] text-white font-bold absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[20px] text-white">
          {title}
        </h2>
        <p className='text-xs md:text-lg'>{description}</p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
