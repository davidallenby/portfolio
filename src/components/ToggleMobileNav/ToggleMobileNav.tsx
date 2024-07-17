import React, { FC, MouseEventHandler } from 'react';
import './ToggleMobileNav.scss';

interface ToggleMobileNavProps {
  onClick: MouseEventHandler;
  open?: boolean;
}

const ToggleMobileNav: FC<ToggleMobileNavProps> = (props) => (
  <button type='button' 
    className={`ToggleMobileNav${props.open ? ' ToggleMobileNav--open': ''}`}
    onClick={props.onClick}
  >
    <div></div>
    <div></div>
    <div></div>
  </button>
);

export default ToggleMobileNav;
