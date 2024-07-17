import React, { FC, useEffect } from 'react';
import './MobileMenu.scss';
import Link from 'next/link';
import { getCurrentYear } from '../../hooks/common';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaCodepen } from 'react-icons/fa';

interface MobileMenuProps {
  open?: boolean;
}

const MobileMenu: FC<MobileMenuProps> = (props) => {

  useEffect(() => {
    console.log('Open: ', props.open)
  }, [props])

  return (
    <div className="MobileMenu">
      <nav className='MobileMenu__inner'>
        <Link href={'/'}>Home</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/#contact'}>Contact</Link>
      </nav>
      <div className='MobileMenu__footer mt-auto'>
        <div className='d-flex align-items-center mb-2'>
          <a href='https://github.com/davidallenby' 
            rel='noreferrer'
            target='_blank'
            className='me-4'
          >
            <BsGithub fontSize={20} />
          </a>
          <a href='https://www.linkedin.com/in/davidallenby/' 
            rel='noreferrer'
            target='_blank'
            className='me-4'
          >
            <BsLinkedin fontSize={20} />
          </a>
          <a href='https://codepen.io/davidallenby' 
            rel='noreferrer'
            target='_blank'
            className='me-4'
          >
            <FaCodepen fontSize={20} />
          </a>
        </div>
        <span>&copy; David Allenby {getCurrentYear()}</span>
      </div>
    </div>
  )
};

export default MobileMenu;
