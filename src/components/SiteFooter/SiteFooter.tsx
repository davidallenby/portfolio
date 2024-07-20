import React, { FC } from 'react';
import './SiteFooter.scss';
import SiteLogo from '@components/SiteLogo/SiteLogo';
import { getCurrentYear } from '../../hooks/common';
import SiteNav from '@components/SiteNav/SiteNav';

interface SiteFooterProps {}

const SiteFooter: FC<SiteFooterProps> = () => (
  <footer className="SiteFooter bg-primary">
    <div className='contained gutter-x'>
        <div className='d-block d-md-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center mb-5 mb-md-0'>
            <SiteLogo colorInverted
              className='me-4'
            />
            <small className='d-none d-md-block'>
              <span>&copy; David Allenby {getCurrentYear()}</span>
            </small>
          </div>
          <SiteNav vertical
            colorInverted
            className='d-md-none mb-5'
          />
          <SiteNav colorInverted
            className='d-none d-md-block'
          />
          <small className='d-block d-md-none'>
            <span>&copy; David Allenby {getCurrentYear()}</span>
          </small>
        </div>
    </div>
  </footer>
);

export default SiteFooter;
