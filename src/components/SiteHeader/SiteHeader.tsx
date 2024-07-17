'use client'

import React, { FC, useEffect, useState } from 'react';
import './SiteHeader.scss';
import SiteLogo from '@components/SiteLogo/SiteLogo';
import { debounce } from '../../hooks/common';
import ToggleMobileNav from '@components/ToggleMobileNav/ToggleMobileNav';
import SiteNav from '@components/SiteNav/SiteNav';
import MobileMenu from '@components/MobileMenu/MobileMenu';

interface SiteHeaderProps {}

const SiteHeader: FC<SiteHeaderProps> = () => {
  // We'll want to show/hide the mobile nav toggle on smaller devices
  const [screen, setScreen] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  // The boolean value that determines whether or not the mobile menu should be
  // visible
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScreen({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    // Create a version of handleResize with debounce attached
    const debounceResize = debounce(handleResize, 500)

    // Event when the window resizes
    window.addEventListener('resize', debounceResize)
  })
  // Check whether it's a mobile viewport or not.
  const isMobile = screen.width < 768;

  // Update the state of the mobile menu open boolean
  const openHandler = () => setOpen((bool: boolean) => !bool);

  return (
    <div className="SiteHeader">
      <div className="d-flex align-items-center justify-content-between gutter-x py-3">
        <SiteLogo 
          className='me-4'
        />
        { isMobile ? <ToggleMobileNav 
          onClick={openHandler}
          open={open}
        />  : <SiteNav />}
        { isMobile && <MobileMenu open={open} />}
      </div>
    </div>
  );
}

export default SiteHeader;
