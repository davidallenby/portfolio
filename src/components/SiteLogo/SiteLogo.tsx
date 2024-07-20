import React, { Component, FC, ReactNode } from 'react';
import './SiteLogo.scss';
import Link from 'next/link';

interface SiteLogoProps {
  colorInverted?: boolean;
  className?: string;
  onClick?: () => void;
  isLink: boolean;
}

const SiteLogo: FC<SiteLogoProps> = ({
  colorInverted, className, isLink = true
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



  return (isLink ? <Link href={'/'}
      className={getClassName()}
    >
      <span>DA</span>
    </Link> : <span className={getClassName()}>
      <span>DA</span>  
    </span>);
}

export default SiteLogo;
