import React from 'react';
// image
import Image from '../assets/avatar.png'; // 내가 원하는 파일로 교체 필요.
// icons
import {FaGithub, FaYoutube, FaEdge, FaHome} from 'react-icons/fa'
import {SiStreamlit, SiNotion} from 'react-icons/si'
import {Link} from 'react-scroll';

// type animation
import {TypeAnimation} from 'react-type-animation'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center 
      lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.3)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount:0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
          >
            I <span>am a</span>
          </motion.h1>
          <motion.div 
          variants={fadeIn('up', 0.4)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.7}} 
          className='font-bold leading-[1.2] mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'></span>
            <TypeAnimation sequence = {[
              'Streamlit Developer', 2000,
              'BigData Scientist', 2000
          ]}
          speed={50}
          wrapper='span'
          className='text-accent-black'
          repeat={Infinity}
          />
          </motion.div>
          <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount:0.7}} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
          </motion.p>
          <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount:0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link to= "contact">
            <button className='btn btn-lg'>Contact me</button>
            </Link>
            <Link to= "work">
            <a href='#' className='text-gradient btn-link'>
              portfolio
            </a>
            </Link>
          </motion.div>
          {/* socials */}
          <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount:0.7}} 
            className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://nigel1513-streamlit-main-yc512z.streamlit.app/' target="_blank">
              <SiStreamlit />
            </a>
            <a href='https://github.com/nigel1513' target="_blank">
              <FaGithub />
            </a>
            <a href='#'>
              <SiNotion />
            </a>
          </motion.div>
        </div>
        {/* image */}
        <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial='hidden'
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
          <img src = {Image} alt='' />
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Banner;


// href = '#' 내 사이트 링크로 전부 변경해야함