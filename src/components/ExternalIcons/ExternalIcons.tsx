import React, { FC } from 'react';
import './ExternalIcons.scss';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaCodepen } from 'react-icons/fa';

interface ExternalIconsProps {
  className?: string;
}

const ExternalIcons: FC<ExternalIconsProps> = ({ className }) => {
  /**
   * Generate the style class string for this component. If the dev has
   * specified custom classes in the parent component, update the default
   * classes with the custom classes attached.
   * @returns 
   */
  const setStyleClass = () => {
    let string = 'ExternalIcons d-flex align-items-center';
    if (className) {
      string = string + ' ' + className;
    }
    return className;
  }

  return (
    <div className={setStyleClass()}>
      <a href='https://github.com/davidallenby' 
        rel='noreferrer'
        target='_blank'
        className='me-4'
      >
        <BsGithub fontSize={20} />
      </a>
      <a href='https://www.linkedin.com/in/davidallenby/' 
        rel='noreferrer'
        target='_blank'
        className='me-4'
      >
        <BsLinkedin fontSize={20} />
      </a>
      <a href='https://codepen.io/davidallenby' 
        rel='noreferrer'
        target='_blank'
        className='me-4'
      >
        <FaCodepen fontSize={20} />
      </a>
    </div>
  );
}

export default ExternalIcons;
