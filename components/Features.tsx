'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

export default function Features({ imgUrl, title, description, circleBg, index }) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="flex flex-row sm:flex-col sm:gap-y-6 gap-x-4"
    >
      <div className={`relative ${circleBg === 'primary' ? 'bg-[#E0F2FE]' : 'bg-[#CFFAFE]'} rounded-full p-9 h-8 sm:h-auto w-[60px] mx-auto`}>
        <div className="absolute rounded-full p-6 top-[18%] sm:top-3 z-20 bg-white m-auto left-0 right-0 w-[40px]">
          <img src={imgUrl} alt={title} className="absolute m-auto top-3.5 left-0 right-0 w-[18px] h-[18px]" />
        </div>
      </div>
      <div className="sm:text-center">
        <h1 className="font-semibold text-[24px] leading-[32px] text-neutral-900">{title}</h1>
        <p className="text-[16px] leading-[24px] text-neutral-700">{description}</p>
      </div>
    </motion.div>
  )
}
