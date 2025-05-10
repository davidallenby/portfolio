'use client'

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
    <section className={className}>
      {contained ? (
        <div className={`container mx-auto px-4`}>{children}</div>
      ) : (
        children
      )}
    </section>
  )
}

export default ContentContainer
