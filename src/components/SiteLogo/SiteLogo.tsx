import React, { FC, useEffect } from 'react';
import Logo from '@svg/site-logo.svg';
import './SiteLogo.scss';
import Link from 'next/link';

interface SiteLogoProps {
  colorInverted?: boolean;
  className?: string;
}

const SiteLogo: FC<SiteLogoProps> = ({
  colorInverted, className
}) => {
  /**
   * This will build the style classes for the element based on whether the
   * props have been set.
   * @returns 
   */
  const getClassName = (): string => {
    let styleClass = 'SiteLogo';
    // If the logo appears in the footer it needs to be inverted
    if (colorInverted) {
      styleClass = styleClass + ' SiteLogo--inverted';
    }
    // If I need to add custom style classes anywhere...
    if (className) {
      styleClass = styleClass + ' ' + className;
    }
    return styleClass;
  }

  useEffect(() => {

  }, [])

  return (
    <Link href={'/'}
      className={getClassName()}
    >
      <Logo />
    </Link>
  );
}

export default SiteLogo;
