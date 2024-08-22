'use client'
import React, { FC, useEffect } from 'react';
import './SanitizedHtml.scss';
import sanitizeHtml, { IOptions } from 'sanitize-html';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/atom-one-dark.min.css';

interface SanitizedHtmlProps {
  html: string;
  className?: string;
  options?: IOptions;
}

const SanitizedHtml: FC<SanitizedHtmlProps> = ({
  html, className, options = {}
}) => {
  // Then register the languages you need
  hljs.registerLanguage('typescript', typescript);

  // Default options for HTML sanitizer
  const defaultOptions: IOptions = {
    allowedTags: [
      // Text
      'p', 'b', 'i', 'em', 'strong', 'a',
      // Lists
      'ul', 'ol', 'li'
    ],
    allowedAttributes: {
      'a': [ 'href' ],
      'code': ['class']
    },
    allowedIframeHostnames: [],
    transformTags: {
      'code': sanitizeHtml.simpleTransform('code', {
        class: 'code-block'
      })
    }
  }

  /**
   * Combine the default tags, with any new tags set by the developer in the
   * parent component
   *
   * @return {*} 
   */
  const setAllowedTags = () => {
    if (!options.allowedTags || !defaultOptions.allowedTags) { return [] }
    return [...new Set(defaultOptions.allowedTags.concat(options.allowedTags))]
  }
  
  /**
   * Sanitize the HTML before adding to the DOM (prevent XSS)
   *
   * @param {string} dirty
   * @param {IOptions} options
   */
  const sanitize = (dirty: string, options: IOptions ) => ({
    __html: sanitizeHtml(
      dirty,
      { 
        ...defaultOptions, 
        ...options,
        allowedTags: setAllowedTags()
      }
    )
  });
  
  const sanitized = sanitize(html, options);

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <div className={`SanitizedHtml${className? ` ${className}` : ''}`}>
      <span dangerouslySetInnerHTML={sanitized}></span>
    </div>
  );
}

export default SanitizedHtml;
