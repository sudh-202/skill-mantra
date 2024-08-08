'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '@/styles/index';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import {  TitleText, TypingText } from '@/components/CustomTexts';
import ExploreCard from "@/components/ExploreCard"

const Scope = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className=" px-4 py-10 md:px-32 md:py-20 text-white" id="explore">
      <motion.div
        // variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <h2 className='text-5xl font-abril ml-4 font-semibold text-center md:mb-12 text-white'>Accounting Scope in India</h2>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Scope;
