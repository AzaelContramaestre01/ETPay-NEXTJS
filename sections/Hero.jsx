'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import {fadeIn, staggerContainer} from '../utils/motion';

const getEarlyAccess = () => {
  console.log('get early access');
};

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col xl:flex-row md:flex justify-between relative xl:gap-y-4 gap-y-[100px]`}
    >
      <img src="/hero-elipse.png" alt="hero-elipse" className="absolute 2xl:right-[20%] right-0 bottom-14 z-[-10] block xl:hidden" />
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="relative w-full"
      >
        <div className="flex flex-col">
          <h1 className="font-semibold text-[36px] leading-[48px] sm:text-[64px] sm:leading-[80px] text-neutral-900 mb-4">Event Registration Reimagined</h1>
          <p className="sm:text-[18px] text-[16px] leading-[24px] text-neutral-900 mb-10 pr-2">Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it sounds amazing?</p>
          <button type="button" onClick={getEarlyAccess} className="bg-primary-600 p-4 text-white rounded-lg w-[161px] ">Get Early Access</button>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative w-full xl:-mt-[120px] -mt-[12px]"
      >
        <div className="w-full flex justify-end">
          <img src="/mockups.png" alt="mockups" className="object-contain" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
