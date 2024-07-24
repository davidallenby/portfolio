'use client';

import React, { FC, ReactNode } from 'react';
import './ContentContainer.scss';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  contained?: boolean;
}

const ContentContainer: FC<ContentContainerProps> = ({
  children, className, contained = true
}) => {
  return (
    <section className={`ContentContainer${' ' + className ?? ''}`}>
      { contained ? 
        <div className={`gutter-x contained`}>
          {children}
        </div> : children
      }
    </section>
  );
}

export default ContentContainer;
