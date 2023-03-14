'use client';

import {motion} from 'framer-motion';

import styles from '../styles';
import {staggerContainer, fadeIn} from '../utils/motion';

const Tools = () => (
  <section className={`${styles.yPaddings} relative`}>
    <div className={`${styles.innerWidth} mb-[50px] opacity-10 h-[2px] bg-neutral-800 flex mx-auto`} />
    <img src="/tools-elipse.png" alt="tools-elipse" className="absolute top-16 md:left-[0.5%] lg:left-[13%] xl:left-[23%] hidden sm:block" />
    <img src="/tools-elipse-mobile.png" alt="tools-elipse" className="absolute top-6 left-[12%] block sm:hidden" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col xl:flex-row xl:justify-between justify-center items-center`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="relative w-full -mt-[12px]"
      >
        <div className="flex flex-col gap-y-6 text-center xl:text-left">
          <h1 className="font-semibold text-[48px] xl:text-[64px] leading-[60px] xl:leading-[80px] text-neutral-900">Integrate with your favorite tools </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-900 mb-10">Connect RegiM with your most favorite sales and marketing tools</p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative w-full mt-4 sm:mt-24 xl:mt-0"
      >
        <div className="w-full flex justify-center xl:justify-end relative z-10">
          <img src="/tools-logos.png" alt="mockups" className="object-contain" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Tools;
