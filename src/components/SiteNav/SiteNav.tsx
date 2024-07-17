import React, { FC } from 'react';
import './SiteNav.scss';
import Link from 'next/link';
import { NavMenuItem } from '../../interfaces/ui.interfaces';
import { SITENAV_ITEMS } from '../../constants/navigation';

interface SiteNavProps {}

const siteNavItems: NavMenuItem[] = [...SITENAV_ITEMS].slice(1);

const SiteNav: FC<SiteNavProps> = () => (
  <nav className="SiteNav">
    {
      siteNavItems.map((item, i) => {
        return <Link href={item.url} 
          key={i}
        >
          <span>{item.label}</span>
        </Link>
      })
    }
  </nav>
);

export default SiteNav;
