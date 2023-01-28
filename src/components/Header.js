import React from 'react';
// image
import Logo from '../assets/logo.svg'; // 내가원하는 로고로 변경해서 지정해야함. 

const Header = () => {
  return <header className= 'py-8'>
  <div className= 'container mx-auto'>
    <div className='flex justify-between items-center'>
      {/* logo */}
      <a href='#'>
        <img src={Logo} alt='' />
      </a>
      {/* button */}
      <button className='btn btn-sm'>Work with me</button>
    </div>
  </div>
  </header>
};

export default Header;
