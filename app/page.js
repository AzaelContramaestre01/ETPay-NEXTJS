import { Footer, Navbar } from '../components';
import {About, Hero, Tools} from '../sections';

import styles from '../styles';

const Page = () => (
  <div className="overflow-hidden space-y-24">
    <Navbar />
    <Hero />
    <div className={`${styles.innerWidth} mb-[50px] opacity-10 h-[2px] bg-neutral-800 flex mx-auto`} />
    <About />
    <Tools />
    <Footer />
  </div>
);

export default Page;
