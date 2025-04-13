import React, { FC, useEffect, useState } from 'react';
import './MobileMenu.scss';
import Link from 'next/link';
import { getCurrentYear } from '../../../helpers/common';
import SiteLogo from '@components/ui/SiteLogo/SiteLogo';
import { NavMenuItem } from '@interfaces/ui.interfaces';
import { useMobileNavContext } from '@context/MobileNavContext';
import { SITENAV_ITEMS } from '@constants/navigation';
import ExternalIcons from '@components/ui/ExternalIcons/ExternalIcons';
import ToggleMobileNav from '../ToggleMobileNav/ToggleMobileNav';

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = ({}) => {
  const { open, toggleOpen } = useMobileNavContext();
  const [attach, setAttach] = useState(false);
  const [styleClass, setStyleClass] = useState(`MobileMenu${open ? ` MobileMenu--open` : ''}`);
  // The delay between showing/hiding the menu, and attaching the element
  const delay = 250;
  // Mobile navigation menu items
  const navItems: NavMenuItem[] = [...SITENAV_ITEMS]

  useEffect(() => {
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
        <div className='MobileMenu__header d-flex justify-content-between align-items-center gutter-x py-3'>
          <SiteLogo colorInverted={true}
            onClick={() => setOpenState(!open)}
          />
          <ToggleMobileNav />
        </div>
        <nav className='MobileMenu__inner gutter-x'>
          <ul className='list-unstyled'>
            { navItems.map((item, i) => {
              return <li key={item.url}>
                <Link href={item.url}
                  onClick={() => setOpenState(!open)}
                >{item.label}</Link>
              </li>
            })}
          </ul>
        </nav>
        <div className='MobileMenu__footer mt-auto gutter-x'>
          <ExternalIcons className='mb-2' />
          <small>&copy; David Allenby {getCurrentYear()}</small>
        </div>
      </div>}
    </>
  )
};

export default MobileMenu;
