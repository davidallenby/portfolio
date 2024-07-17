import React, { FC } from 'react';
import Image from 'next/image'
import './SiteLogo.scss';

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

  return (
    <div className={getClassName()}>
      <Image 
        src={`/svg/site-logo.svg`} 
        width={42}
        height={42}
        alt='David Allenby Site Logo'
      />
    </div>
  );
}

export default SiteLogo;
