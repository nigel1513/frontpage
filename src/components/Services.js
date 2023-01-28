import React from 'react';
// icon
import {BsArrowUpRight, BsArrowRightCircleFill} from 'react-icons/bs'
import {TfiMore} from 'react-icons/tfi'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'

//service data 여기 데이터 수정해줘야함. 밑에 데이터 수정할 거 없음.
const service = [
  {
    name: 'Data Collection',
    description:"",
    link: 'Learn more',
    href: 'https://nigel1513-streamlit-main-yc512z.streamlit.app/Collection'
  },
  {
    name: 'Exploratory Data Analysis',
    description: '',
    link: 'Learn more',
    href: 'https://nigel1513-streamlit-main-yc512z.streamlit.app/EDA'
  },
  {
    name: 'Data Visualization',
    description: '',
    link: 'Learn more',
    href: 'https://nigel1513-streamlit-main-yc512z.streamlit.app/Visualization'
  },
  {
    name: 'Data Analytics and Reporting',
    description: '',
    link: 'Learn more',
    href: 'https://nigel1513-streamlit-main-yc512z.streamlit.app/pycaret'
  },
]

// <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-3'> bg-services 수정해야함 png 파일만 수정가능함.


const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image*/}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          vieport={{ocen: false, amount: 0.3}}
          className='flex-1 bg-services bg-contain bg-bottom h-[700px] bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
            <h2 className='h2 text-white mb-6 font-bold leading-[0.8]'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'></h3>
            <a href="https://github.com/nigel1513" target="_blank">
            <button className='btn btn-sm'>See my work</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div 
             variants={fadeIn('left', 0.5)}
             initial="hidden"
             whileInView={"show"}
             vieport={{ocen: false, amount: 0.3}}
             className='flex-1'>
            {/* service liot */}
            <div>
              {service.map((service, index)=> {
                // destructure service
                const {name, description, link, href} = service;
                return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] trackin-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href={href} target= "_blank" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <TfiMore/>
                    </a>
                    <a href={href} className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </div>
                );
                })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
