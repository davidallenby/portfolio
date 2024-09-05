import React, { FC, ReactNode } from 'react';
import './SiteLayout.scss';
import SiteHeader from '@components/ui/SiteHeader';
import SiteFooter from '@components/ui/SiteFooter/SiteFooter';

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout: FC<SiteLayoutProps> = ({ children }) => (
  <>
    <SiteHeader />
      <main className="d-flex flex-column flex-grow-1">
        {children}
      </main>
    <SiteFooter />
  </>
);

export default SiteLayout;
