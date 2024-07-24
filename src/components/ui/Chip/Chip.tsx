import React, { FC, ReactNode } from 'react';
import './Chip.scss';
import { MdClose } from 'react-icons/md';

interface ChipProps {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  small?: boolean;
  onDismiss?: (e:any) => void;
}

const Chip: FC<ChipProps> = ({
  className, children, icon, small, onDismiss
}) => (
  <div className={`Chip d-inline-flex align-items-center${' ' + className ?? ''}${small ? ' Chip--small' : ''}`}>
    { icon && <span className='me-2'>
      {icon}
    </span>}
    <span className='Chip__label'>{children}</span>
    {
      onDismiss && <button type='button' className='Chip__dismiss ms-3 p-0 border-0 bg-transparent'
        onClick={onDismiss}
      >
        <MdClose size={14} />
      </button>
    }
  </div>
);

export default Chip;
