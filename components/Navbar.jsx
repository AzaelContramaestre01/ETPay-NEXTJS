'use client';

import {motion} from 'framer-motion';
import styles from '../styles';
import {navVariants} from '../utils/motion';

// Create aa function that consoles.log 'get early access' when the button is clicked
const getEarlyAccess = () => {
  console.log('get early access');
};

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.xPaddings} relative`}
  >
    <img src="/nav-elipse.png" alt="nav-elipse" className="absolute 2xl:right-[20%] right-0 z-[-10] hidden xl:block" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 pt-8`}>
      <img src="/logo.svg" alt="search" className="w-[100px] h-[32px] object-contain" />
      <button type="button" onClick={getEarlyAccess} className="bg-primary-600 p-4 text-white rounded-lg">Get Early Access</button>
    </div>
  </motion.nav>
);

export default Navbar;
