'use client';

import { useDispatch } from "react-redux";
import { getEarlyAccess } from "../slices/userSlice";
import { AppDispatch } from "../store/store";

import {motion} from 'framer-motion';
import styles from '../styles';
import {navVariants} from '../utils/motion';

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`${styles.xPaddings} relative`}
    >
      <img src="/nav-elipse.png" alt="nav-elipse" className="absolute right-0 z-[-10] hidden xl:block flex-1" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 pt-8`}>
        <img src="/logo.svg" alt="search" className="w-[100px] h-[32px] object-contain" />
        <button type="button" onClick={() => dispatch(getEarlyAccess())} className="bg-primary-600 cursor-pointer p-4 text-white rounded-lg">Get Early Access</button>
      </div>
    </motion.nav>
  );
}
