import React from 'react';
// motion 
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const notify = () => {
    toast('💌 Email sent Successfully')
   } 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0myajec', 'template_lfq7w08', form.current, 'MQQgf69E6vRdy-VI6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();



  };

  return (
  <section className='py-16 lg:selection' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*text*/}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          vieport={{ocen: false, amount: 0.3}}
          className='flex-1 flex justify-start items-center'>
          <div>
          <h4 className='text-xl uppercase text-white font-bold  mb-2 tracking-wide'>
            Contact me !
          </h4>
          <h2 className='text-[40px] lg:text-[90px] leading-none mb-12'>
            Let's work <br/> together!
          </h2>
         </div>
        </motion.div>
        {/*form*/}
        <motion.form ref={form} onSubmit={sendEmail}
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          vieport={{ocen: false, amount: 0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py3 outline-none w-full placeholder:text-white focus:border-white transition-all' 
          type='text'
          placeholder='name' name='user_name'
          />
          <input className='bg-transparent border-b py3 outline-none w-full placeholder:text-white focus:border-white transition-all' 
          type='text'
          placeholder='Email' name='user_email'
          />
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-white transition-all resize-none mb-12' placeholder='message' name='message'></textarea>
          <button onClick={notify} className='btn btn-lg'>Send message</button>
          <ToastContainer 
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
          />
        </motion.form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
