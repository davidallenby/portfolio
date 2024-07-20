'use client';

import React, { FC, ReactNode, useEffect, useRef } from 'react';
import './ContentContainer.scss';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  contained?: boolean;
}

const ContentContainer: FC<ContentContainerProps> = ({
  children, className, contained = true
}) => {
  const elem = useRef<HTMLElement>(null);

  useEffect(() => {
    /**
     * Checks if the element is currently in the viewport
     * @param elem 
     * @returns 
     */
    const isInView = () => {
      if (!elem.current) { return false; }
      // We need to get the top of the content container scrolling into view
      const rect = elem.current.getBoundingClientRect();
      // Get the height of the window.
      const height = window.innerHeight;
      // Check and see if the content container scroll position is half-way into
      // the viewport. This is how we fade in the content. If the content's
      // scroll position is the same Y value as half the height of the screen.
      // We'll fade in the content.
      return rect.top <= (height / 2);
    }

    /**
     * Check if the element is visible in the viewport
     * @returns 
     */
    const isVisible = () => {
      if (!elem.current) { return false; }
      const { classList } = elem.current;
      return classList.contains('ContentContainer--visible');
    }

    /**
     * Scroll event handler function. Will check if the element is first within
     * the viewport bounds, then if it is, checks if the element is already
     * visible. If it's not visible, we make it visible
     * @returns 
     */
    const onScrollHandler = () => {
      // If the element is NOT in view, ignore
      if (!isInView()) { return; }
      // If the element is already visible, abort
      if (isVisible()) { return; }
      // If the element is not visible yet, and is in view, fade it in!
      elem.current?.classList.add('ContentContainer--visible');
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', onScrollHandler)
    // We need to run the same scroll handler function when the page loads.
    onScrollHandler();
  })

  return (
    <section ref={elem} className={`ContentContainer${' ' + className ?? ''}`}>
      <div className='contained gutter-x'>
        {children}
      </div>
    </section>
  );
}

export default ContentContainer;
