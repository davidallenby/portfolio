import React, { FC, ReactNode } from 'react';
import './PublicLayout.scss';
import SiteHeader from '@components/ui/SiteHeader';
import SiteFooter from '@components/ui/SiteFooter/SiteFooter';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => (
  <>
    <SiteHeader />
      <main className="d-flex flex-column flex-grow-1">
        {children}
      </main>
    <SiteFooter />
  </>
);

export default PublicLayout;
