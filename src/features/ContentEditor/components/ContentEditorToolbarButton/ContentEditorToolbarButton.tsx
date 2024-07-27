import React, { FC, ReactNode } from 'react';
import './ContentEditorToolbarButton.scss';

interface ContentEditorToolbarButtonProps {
  children: ReactNode;
  className?: string;
  onClick: (e: any) => void;
}

const ContentEditorToolbarButton: FC<ContentEditorToolbarButtonProps> = ({
  children, onClick, className
}) => (
  <button type='button'
    className={`ContentEditorToolbarButton border-0 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ContentEditorToolbarButton;
