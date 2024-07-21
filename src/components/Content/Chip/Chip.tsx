import React, { FC, ReactNode } from 'react';
import './Chip.scss';

interface ChipProps {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
}

const Chip: FC<ChipProps> = ({
  className, children, icon
}) => (
  <div className={`Chip d-inline-flex${' ' + className ?? ''}`}>
    { icon && <span className='me-2'>
      {icon}
    </span>}
    <span>{children}</span>
  </div>
);

export default Chip;
