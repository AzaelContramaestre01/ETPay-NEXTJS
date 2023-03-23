'use client';

import {motion} from 'framer-motion';

import styles from '../styles';
import {about} from '../constants';
import {Features} from '../components/index.ts';
import {fadeIn, staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col gap-y-12`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-center"
      >
        <h1 className="font-semibold text-[48px] leading-[60px] lg:text-[56px] lg:leading-[72px] text-neutral-900">All-in-one Event Platform</h1>
        <p className="text-[18px] leading-[24px] sm:leading-[28px] text-neutral-700">Deliver an exceptional event experience</p>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-center relative"
      >
        <img src="/video-thumbnail.png" alt="video-thumbnail" />
        <div className="absolute bottom-0 z-[10] flex justify-center items-center bg-white rounded-3xl shadow-lg p-4 -mb-[20px] m-auto left-0 right-0 w-[234px] cursor-pointer">
          <img src="/play-icon.svg" alt="play-icon" className="mr-2" />
          <p>See it in action (2min)</p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between items-center gap-20 mt-12">
        {about.map((item, index) => (
          <Features
            key={index}
            {...item}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
