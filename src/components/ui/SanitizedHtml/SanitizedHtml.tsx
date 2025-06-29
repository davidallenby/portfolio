'use client'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/atom-one-dark.min.css'
import { type FC, useCallback, useEffect } from 'react'
import sanitizeHtml, { type IOptions } from 'sanitize-html'
import './SanitizedHtml.css'

interface SanitizedHtmlProps {
  html: string
  className?: string
  options?: IOptions
}

// Then register the languages you need
hljs.registerLanguage('typescript', typescript)

// Default options for HTML sanitizer
const defaultOptions: IOptions = {
  allowedTags: [
    // Text
    'p',
    'b',
    'i',
    'em',
    'strong',
    'a',
    // Lists
    'ul',
    'ol',
    'li'
  ],
  allowedAttributes: {
    a: ['href'],
    code: ['class']
  },
  allowedIframeHostnames: [],
  transformTags: {
    code: sanitizeHtml.simpleTransform('code', {
      class: 'code-block'
    })
  }
}

const SanitizedHtml: FC<SanitizedHtmlProps> = ({
  html,
  className,
  options = {}
}) => {
  /**
   * Combine the default tags, with any new tags set by the developer in the
   * parent component
   *
   * @return {*}
   */
  const setAllowedTags = useCallback((): string[] => {
    if (!options.allowedTags || !defaultOptions.allowedTags) {
      return []
    }
    return [...new Set(defaultOptions.allowedTags.concat(options.allowedTags))]
  }, [options.allowedTags])

  /**
   * Sanitize the HTML before adding to the DOM (prevent XSS)
   *
   * @param {string} dirty
   * @param {IOptions} options
   */
  const sanitize = useCallback(
    (dirty: string, options: IOptions) => ({
      __html: sanitizeHtml(dirty, {
        ...defaultOptions,
        ...options,
        allowedTags: setAllowedTags()
      })
    }),
    [setAllowedTags]
  )

  const sanitized = sanitize(html, options)

  // Highlight syntax in the code blocks on render
  useEffect(() => {
    if (sanitized) {
      hljs.highlightAll()
    }
  }, [sanitized])

  return (
    <div className={`SanitizedHtml${className ? ` ${className}` : ''}`}>
      <span dangerouslySetInnerHTML={sanitized}></span>
    </div>
  )
}

export default SanitizedHtml
