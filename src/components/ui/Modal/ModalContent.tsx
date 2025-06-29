import { Description } from '@headlessui/react'
import classNames from '@node_modules/classnames'

import { PropsWithChildren, forwardRef } from 'react'

export interface ModalContentProps {
  className?: string
}

const ModalContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ModalContentProps>
>(({ className, children }, ref) => {
  return (
    <Description
      as='div'
      ref={ref}
      className={classNames(
        'h-fit w-full overflow-y-auto hide-scroll p-6',
        className
      )}
    >
      {children}
    </Description>
  )
})

export default ModalContent
