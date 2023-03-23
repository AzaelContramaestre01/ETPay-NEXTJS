"use client"

import { Footer, Navbar } from '../components/index';
import { About, Hero, Tools } from '../sections';

import styles from '../styles';

export default function Page() {

  return (
    <div className="overflow-hidden space-y-24">
      <Navbar />
      <Hero />
      <div className={`${styles.innerWidth} mb-[50px] opacity-10 h-[2px] bg-neutral-800 flex mx-auto`} />
      <About />
      <Tools />
      <Footer />
    </div>
  )
}
