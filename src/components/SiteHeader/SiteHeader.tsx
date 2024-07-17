'use client'

import React, { FC, useEffect, useState } from 'react';
import './SiteHeader.scss';
import SiteLogo from '@components/SiteLogo/SiteLogo';
import { debounce } from '../../hooks/common';
import ToggleMobileNav from '@components/ToggleMobileNav/ToggleMobileNav';
import SiteNav from '@components/SiteNav/SiteNav';
import MobileMenu from '@components/MobileMenu/MobileMenu';
import { MobileNavContextProvider } from '../../context/MobileNavContext';

interface SiteHeaderProps {}

const SiteHeader: FC<SiteHeaderProps> = () => {
  // We'll want to show/hide the mobile nav toggle on smaller devices
  const [screen, setScreen] = useState({
    height: 0,
    width: 0
  })

  useEffect(() => {
    // Set the screen size in state
    function handleResize() {
      setScreen({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    // Run handleResize on page load (window is not available outside useEffect)
    handleResize();    
    // Create a version of handleResize with debounce attached
    const debounceResize = debounce(handleResize, 500)
    // Run the dounce version of handleResize when the window size is changed
    window.addEventListener('resize', debounceResize)
  }, [setScreen])

  // Check whether it's a mobile viewport or not. We'll use this to attach /
  // remove the mobile menu/desktop menu
  const isMobile = screen.width < 768;

  return (
    <MobileNavContextProvider>
      <div className="SiteHeader">
      <div className="contained d-flex align-items-center justify-content-between gutter-x py-3">
        <SiteLogo 
          className='me-4'
        />
        { isMobile ? <ToggleMobileNav />  : <SiteNav />}
        { isMobile && <MobileMenu />}
      </div>
    </div>
    </MobileNavContextProvider>
  );
}

export default SiteHeader;
