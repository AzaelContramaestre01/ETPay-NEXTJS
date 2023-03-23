'use client';

import {motion} from 'framer-motion';

import styles from '../styles';
import {about} from '../constants';
import {staggerContainer} from '../utils/motion';
import {Features} from '../components/index.ts';

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="grid grid-cols-3 justify-around items-center gap-20">
        {about.map((item, index) => (
          <Features
            key={item.id}
            {...item}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Explore;
