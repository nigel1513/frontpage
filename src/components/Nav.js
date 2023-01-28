import React from 'react';
// import icons
import {BiClipboard, BiHomeAlt, BiUser} from 'react-icons/bi'
import {bsClipboardData, BsBriefcase, bschatSquare, BsChatSquareText} from 'react-icons/bs'
// link
import {Link} from 'react-scroll';

const Nav = () => {
  return (
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      {/* nav inner */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link to='home'
        action='active' 
        smooth= {true}
        spy={true}
        offset={-200}
        className='cursor-pointer w-[60px] flex items-center justify-center'>
          <BiHomeAlt />
        </Link >
        <Link to='about' 
        action='active' 
        smooth= {true}
        spy={true}
        className='cursor-pointer w-[60px] flex items-center justify-center'>
          <BiUser />
        </Link>
        <Link to='services' 
        action='active' 
        smooth= {true}
        spy={true}
        className='cursor-pointer w-[60px] flex items-center justify-center'>
          <BiClipboard />
        </Link>
        <Link to='work'
        action='active' 
        smooth= {true}
        spy={true}
        className='cursor-pointer w-[60px] flex items-center justify-center'>
          <BsBriefcase />
        </Link>
        <Link to='contact'     
        action='active' 
        smooth= {true}
        spy={true}
        className='cursor-pointer w-[60px] flex items-center justify-center'>
          <BsChatSquareText/>
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Nav;

// <BiHomeAlt /> 아이콘 지정
// action, smooth: 스크롤 방식, spy = 아이콘 표시 방식을 나타냄