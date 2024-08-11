import React, { FC } from 'react';
import './ToggleMobileNav.scss';
import { useMobileNavContext } from '@context/MobileNavContext';

interface ToggleMobileNavProps {
  className?: string;
}

const ToggleMobileNav: FC<ToggleMobileNavProps> = ({
  className
}) => {
  const { open, toggleOpen} = useMobileNavContext();

  return (
    <button type='button' 
      className={`ToggleMobileNav${open ? ' ToggleMobileNav--open': ''}${className ? ` ${className}` : ''}`}
      onClick={() => {
        toggleOpen(!open);
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}

export default ToggleMobileNav;
