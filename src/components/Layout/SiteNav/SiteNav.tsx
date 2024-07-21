import React, { FC, ReactNode } from 'react';
import './SiteNav.scss';
import Link from 'next/link';
import { NavMenuItem } from '../../../interfaces/ui.interfaces';
import { SITENAV_ITEMS } from '../../../constants/navigation';

interface SiteNavProps {
  vertical?: boolean;
  colorInverted?: boolean;
  className?: string;
}

const siteNavItems: NavMenuItem[] = [...SITENAV_ITEMS].slice(1);

const SiteNav: FC<SiteNavProps> = (props) => {
  // Destructure the props object
  const { vertical, colorInverted, className } = props;

  /**
   * We want to set the style classes of the element when the component loads
   * This function will build them based on the props passed to the component
   *
   * @return {*}  {string}
   */
  const setStyleClass = (): string => {
    // Set the base style class for the component
    let styleClass = 'SiteNav';
    // Check if props have been set, and attach relevant style classes
    if (vertical) {
      styleClass = styleClass + ' SiteNav--vertical';
    }
    if (colorInverted) {
      styleClass = styleClass + ' SiteNav--inverted';
    }
    if (className) {
      styleClass = styleClass + ' ' + className;
    }
    // Iterate over the component props, and for each matching key in the array
    // provided, 
    return styleClass;
  }


  /**
   * Get the list of nav links. If "vertical" is true, we will wrap the links in
   * an unstyled list. If not vertical, we'll print them as inline nav links
   *
   * @return {*} 
   */
  const getNavLinks = (): ReactNode => {
   return siteNavItems.map((item, i) => {
      return vertical ? <li key={i}>
        {getNavLinkNode(item)}
      </li> : getNavLinkNode(item, i)
    })
  }

  /**
   * Get the individual nav link item template
   *
   * @param {NavMenuItem} item
   * @return {*}  {ReactNode}
   */
  const getNavLinkNode = (item: NavMenuItem, key?: number): ReactNode => {
    return <Link href={item.url}
      key={key}
      className={`${colorInverted ? 'SiteNav__link--inverted' : ''}`}
    >
      <span>{item.label}</span>
    </Link>
  }

  return (
    <nav className={setStyleClass()}>
      { vertical ? 
        <ul className='list-unstyled mb-0'>
          {getNavLinks()}
        </ul> : getNavLinks() }
    </nav>
  );
}

export default SiteNav;
