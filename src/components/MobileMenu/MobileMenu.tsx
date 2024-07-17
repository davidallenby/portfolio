import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import './MobileMenu.scss';
import Link from 'next/link';
import { getCurrentYear } from '../../hooks/common';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaCodepen } from 'react-icons/fa';
import SiteLogo from '@components/SiteLogo/SiteLogo';
import { UI } from '../../interfaces/ui.interfaces';
import { useMobileNavContext } from '../../context/MobileNavContext';

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = (props) => {
  const { open, toggleOpen } = useMobileNavContext();
  const [attach, setAttach] = useState(false);
  const [styleClass, setStyleClass] = useState(`MobileMenu${open ? ` MobileMenu--open` : ''}`);
  // The delay between showing/hiding the menu, and attaching the element
  const delay = 250;
  // Mobile navigation menu items
  const navItems: UI.NavMenuItem[] = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Projects',
      url: '/projects'
    },
    {
      label: 'About',
      url: '/about'
    },
    {
      label: 'Contact',
      url: '/#contact'
    },
  ]

  useEffect(() => {
    console.log('Open is: ', open)
    setStyleClass(`MobileMenu${open ? ` MobileMenu--open` : ''}`)
    setTimeout(() => {
      setAttach(open);
    }, delay);
  }, [open])

  const setOpenState = (bool: boolean) => {
    setStyleClass(`MobileMenu${open ? ` MobileMenu--open` : ''}`)
    toggleOpen(bool);
  }

  return (
    <>
      {attach && <div className={styleClass}>
        <div className='MobileMenu__header d-flex gutter-x py-3'>
          <SiteLogo colorInverted={true} />
        </div>
        <nav className='MobileMenu__inner gutter-x'>
          <ul className='list-unstyled'>
            { navItems.map((item, i) => {
              return <li key={i}>
                <Link href={item.url}
                  onClick={() => setOpenState(!open)}
                >{item.label}</Link>
              </li>
            })}
          </ul>
        </nav>
        <div className='MobileMenu__footer mt-auto gutter-x'>
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
      </div>}
    </>
  )
};

export default MobileMenu;
