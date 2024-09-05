import React, { FC } from 'react';
import './SharePostButton.scss';
import { BsShare } from 'react-icons/bs';

interface SharePostButtonProps {}

const SharePostButton: FC<SharePostButtonProps> = () => (
  <button type='button' 
    className="SharePostButton d-flex align-items-center bg-transparent border-0"
  >
    <BsShare size={18} className='me-sm-3' />
    <span className='d-none d-sm-inline subtitle'>Share</span>
  </button>
);

export default SharePostButton;
