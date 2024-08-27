import React, { FC, ReactNode, useEffect, useState } from 'react';
import './Modal.scss';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  show: boolean;
  title: string;
  onClose: (bool: boolean) => void;
  children: ReactNode;
  cancelBtnLabel?: string;
}

const Modal: FC<ModalProps> = ({
  show, title, onClose, children, cancelBtnLabel = 'Cancel'
}) => {
  const [open, setOpen] = useState(false);
  const [styleClass, setStyleClass] = useState('Modal');

  useEffect(() => {
    const baseStyleClass = `Modal position-fixed top-0 start-0 h-100 w-100`;
    const updatedStyleClass = `${baseStyleClass}${show ? ' Modal--show' : ''}`

    if (show) {
      setTimeout(() => {
        setStyleClass(updatedStyleClass)
        document.body.classList.add('scroll-lock')
      }, 250)
      setOpen(show);
    } else {
      setStyleClass(updatedStyleClass)
      setTimeout(() => {
        setOpen(show);
        document.body.classList.remove('scroll-lock')
      }, 250)
    }
  }, [show, open])


  return (
    <>
      { open && <div className={styleClass}
        onClick={(e) => onClose(false)}
      >
      <div className='Modal__body position-absolute w-100 d-flex flex-column flex-grow-1'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='Modal__header p-3 border-bottom d-flex align-items-center justify-content-between'>
          <h4 className='mb-0 text-truncate me-3'>{title}</h4>
          <button type='button'
            className='btn'
            onClick={() => onClose(false)}
          >
            <IoMdClose size={22} />
          </button>
        </div>
        <div className='Modal__content flex-grow-1 p-3'>
          { children }
        </div>
        <div className='Modal__footer text-end p-3 border-top'>
          <button type='button'
            className='btn btn-outline-primary'
            onClick={() => onClose(false)}
          >
            <span>{ cancelBtnLabel }</span>
          </button>
        </div>
      </div>
    </div> }
    </> 
  );
}

export default Modal;
