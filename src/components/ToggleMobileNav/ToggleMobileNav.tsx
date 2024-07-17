import React, { FC } from 'react';
import './ToggleMobileNav.scss';
import { useMobileNavContext } from '../../context/MobileNavContext';

interface ToggleMobileNavProps {}

const ToggleMobileNav: FC<ToggleMobileNavProps> = () => {
  const { open, toggleOpen} = useMobileNavContext();

  return (
    <button type='button' 
      className={`ToggleMobileNav${open ? ' ToggleMobileNav--open': ''}`}
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
