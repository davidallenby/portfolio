'use client'

import classNames from '@node_modules/classnames'
import { type FC, type ReactNode } from 'react'
import './ContentContainer.scss'

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
    <section className={classNames(`ContentContainer`, className)}>
      {contained ? (
        <div className={`container mx-auto`}>{children}</div>
      ) : (
        children
      )}
    </section>
  )
}

export default ContentContainer
