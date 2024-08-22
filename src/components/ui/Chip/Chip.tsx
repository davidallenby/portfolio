'use client'
import React, { FC, ReactNode, useEffect, useState } from 'react';
import './Chip.scss';
import { MdClose } from 'react-icons/md';

interface ChipProps {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  small?: boolean;
  onDismiss?: (e:any) => void;
  onClick?: (e: any) => void;
  toggle?: boolean;
}

const Chip: FC<ChipProps> = ({
  className, children, icon, small, onDismiss, onClick, toggle
}) => {
  const [styleClass, setStyleClass] = useState('')



  /**
   * If an onClick method is present. We need to enable this for people using a
   * keyboard. (i.e. accessible users.)
   *
   * @param {*} e
   * @return {*} 
   */
  const keyDownHandler = (e: any) => {
    if (!onClick || e.key !== 'Enter') { return; }
    clickHandler(e);
  }

  /**
   * Handles the click event.
   *
   * @param {*} e
   */
  const clickHandler = (e: any) => {
    if (onClick) { onClick(e); }
  }

  useEffect(() => {
    /**
     * Initialise the styleClass attribute for this element based on the props
     * provided
     *
     */
    const initStyleClasses = () => {
      let classes = ``;
      if (small) { classes += ` Chip--small` }
      if (!!onClick) { classes += ` Chip--clickable` }
      if (toggle) { classes += ` Chip--active` }
      setStyleClass(classes);
    }
    initStyleClasses();
  }, [toggle, className, small, onClick])

  return (
    <div 
      className={`Chip d-inline-flex align-items-center ${className} ${styleClass}`}
      onClick={(onClick) ? clickHandler : undefined}
      onKeyDown={(onClick) ? keyDownHandler : undefined}
      tabIndex={(!!onClick ? 0 : undefined)}
    >
      { icon && <span className='me-2'>
        {icon}
      </span>}
      <span className='Chip__label'>{children}</span>
      {
        onDismiss && <button type='button' 
          className='Chip__dismiss ms-3 p-0 border-0 bg-transparent'
          onClick={onDismiss}
        >
          <MdClose size={14} />
        </button>
      }
    </div>
  );
}

export default Chip;
