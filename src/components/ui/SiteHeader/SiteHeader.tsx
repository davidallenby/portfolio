'use client'

import React, { FC, useEffect, useState } from 'react';
import './SiteHeader.scss';
import SiteLogo from '@components/ui/SiteLogo/SiteLogo';
import { debounce } from '../../../lib/common';
import ToggleMobileNav from '../ToggleMobileNav/ToggleMobileNav';
import SiteNav from '../SiteNav/SiteNav';
import MobileMenu from '../MobileMenu/MobileMenu';
import { MobileNavContextProvider } from '@context/MobileNavContext';
import { useBreakpointBoolean } from '@hooks/dom';

interface SiteHeaderProps {}

const SiteHeader: FC<SiteHeaderProps> = () => {
  const { isMobile } = useBreakpointBoolean();


  return (
    <MobileNavContextProvider>
      <div className="SiteHeader">
        <div className="contained d-flex align-items-center justify-content-between gutter-x py-3">
          <SiteLogo 
            className='me-4'
          />
          <ToggleMobileNav className='d-md-none' />
          <SiteNav className='d-none d-md-inline-flex' />
          { isMobile && <MobileMenu />}
        </div>
      </div>
    </MobileNavContextProvider>
  );
}

export default SiteHeader;
