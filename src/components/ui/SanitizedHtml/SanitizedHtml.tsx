import React, { FC } from 'react';
import './SanitizedHtml.scss';
import sanitizeHtml, { IOptions } from 'sanitize-html';

interface SanitizedHtmlProps {
  html: string;
  className?: string;
  options?: IOptions;
}

const SanitizedHtml: FC<SanitizedHtmlProps> = ({
  html, className, options = {}
}) => {

  const defaultOptions: IOptions = {
    allowedTags: [ 'p', 'b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol'],
    allowedAttributes: {
      'a': [ 'href' ]
    },
    allowedIframeHostnames: [],
    transformTags: {
      'code': sanitizeHtml.simpleTransform('code', {
        class: 'code-block'
      })
    }
  }

  const setAllowedTags = () => {
    if (!options.allowedTags || !defaultOptions.allowedTags) { 
      return [];
    }
    return [...new Set(defaultOptions.allowedTags.concat(options.allowedTags))]
  }
  
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

  return (
    <div className={`SanitizedHtml${className? ` ${className}` : ''}`}>
      <span dangerouslySetInnerHTML={sanitize(html, options)}></span>
    </div>
  );
}

export default SanitizedHtml;
