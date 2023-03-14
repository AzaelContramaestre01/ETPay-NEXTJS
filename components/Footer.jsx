'use client';

import {motion} from 'framer-motion';
import {socials} from '../constants';
import {footerVariants} from '../utils/motion';

import styles from '../styles';

const getEarlyAccess = () => {
  console.log('get early access');
};

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    className={`${styles.paddings} py-8 relative bg-neutral-900`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-24 justify-center items-center lg:justify-between lg:items-stretch`}>
      <div className="flex flex-col items-center justify-between text-center space-y-14">
        <h4 className="font-semibold text-5xl leading-[60px] text-white">
          Create your event with RegiM
        </h4>
        <p className="text-lg text-white leading-7">
          Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event.
        </p>
        <button type="button" onClick={getEarlyAccess} className="bg-primary-600 p-4 text-white rounded-lg">Get Early Access</button>
      </div>
      <div className="flex flex-col relative">
        <div className="mb-[50px] opacity-10 h-[2px] bg-white" />
        <div className="absolute rounded-full p-10 -top-8 z-20 m-auto left-0 right-0 w-[40px] bg-neutral-900">
          <img src="/logomark.svg" alt="logomark" className="absolute m-auto top-3.5 left-0 right-0 w-[44px] h-[44px]" />
        </div>
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4">
          <p className="font-normal text-[18px] text-white opacity-50 text-center lg:text-left">
            © 2023 Azael Contramaestre - Prueba de ETPay o.o
          </p>
          <div className="flex gap-4 items-center lg:justify-end mx-auto lg:mx-0">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-[#2561AB]"
              >
                <img src={social.url} alt="social" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
