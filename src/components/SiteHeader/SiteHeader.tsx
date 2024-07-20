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
  // This is required because there's a delay between the DOM loading and the
  // window event figuring out whether or not this is a mobile device or not.
  const [isLoaded, setIsLoaded] = useState(false);

  // Check whether it's a mobile viewport or not. We'll use this to attach /
  // remove the mobile menu/desktop menu
  const isMobile = screen.width < 768;

  useEffect(() => {
    // Set the screen size in state
    function handleResize() {
      setScreen({
        height: window.innerHeight,
        width: window.innerWidth
      })
      if (!isLoaded) { setIsLoaded(true) }
    }
    // Run handleResize on page load (window is not available outside useEffect)
    handleResize();    
    // Create a version of handleResize with debounce attached
    const debounceResize = debounce(handleResize, 100)
    // Run the dounce version of handleResize when the window size is changed
    window.addEventListener('resize', debounceResize)
  }, [setScreen, setIsLoaded, isLoaded])


  return (
    <MobileNavContextProvider>
      <div className="SiteHeader">
      <div className="contained d-flex align-items-center justify-content-between gutter-x py-3">
        <SiteLogo 
          className='me-4'
        />
        <ToggleMobileNav className='d-md-none' />
        <SiteNav className='d-none d-md-inline-flex' />
        { isLoaded && isMobile && <MobileMenu />}
      </div>
    </div>
    </MobileNavContextProvider>
  );
}

export default SiteHeader;
