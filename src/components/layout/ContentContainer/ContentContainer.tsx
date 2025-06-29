'use client'

import classNames from '@node_modules/classnames'
import { type FC, type ReactNode } from 'react'

interface ContentContainerProps {
  children: ReactNode
  className?: string
  contained?: boolean
}

const ContentContainer: FC<ContentContainerProps> = ({
  children,
  className,
  contained = true
}) => {
  return (
    <section
      className={classNames(``, className, {
        'py-18 md:py-24 lg:py-28 xl:py-32': !className?.includes('py-')
      })}
    >
      {contained ? (
        <div className={`container mx-auto px-4`}>{children}</div>
      ) : (
        children
      )}
    </section>
  )
}

export default ContentContainer
