import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild
} from '@headlessui/react'
import classNames from 'classnames'
import { type FC, Fragment, type ReactNode, useRef } from 'react'

export interface ModalContainerProps {
  children: ReactNode
  isOpen: boolean
  onDismiss: (bool: boolean) => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const ModalContainer: FC<ModalContainerProps> = ({
  children,
  isOpen,
  onDismiss,
  size = 'md',
  className,
  ...props
}) => {
  const dialogPanelRef = useRef<HTMLDivElement>(null)

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (
      dialogPanelRef.current &&
      !dialogPanelRef.current.contains(event.target as Node)
    ) {
      onDismiss(false)
    }
  }

  return (
    <Transition.Root unmount appear as={Fragment} show={isOpen}>
      <TransitionChild
        enter='transition duration-300 ease-out'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition duration-300 ease-out'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        as={Dialog}
        className='fixed top-0 left-0 isolate z-1001 flex h-screen w-screen items-center justify-center bg-black/60'
        onClose={onDismiss}
        onClick={handleBackdropClick}
        {...props}
      >
        <TransitionChild
          ref={dialogPanelRef}
          as={DialogPanel}
          enter='transition duration-300 ease-out'
          enterFrom='translate-y-full opacity-100 sm:translate-y-0 sm:opacity-0'
          enterTo='translate-y-0 opacity-100 sm:translate-y-0 sm:opacity-100'
          leave='transition duration-300 ease-out'
          leaveFrom='translate-y-0 opacity-100 sm:translate-y-0 sm:opacity-100'
          leaveTo='translate-y-full opacity-100 sm:translate-y-0 sm:opacity-0'
          className={classNames(
            'absolute bottom-0 left-0 sm:bottom-auto sm:left-auto sm:top-[20%]',
            'flex h-fit max-h-[95vh] w-full flex-col border-gray-200 bg-white text-gray-900 sm:max-w-2xl',
            'rounded-t-md rounded-b-none sm:rounded-none',
            {
              'sm:max-w-md': size === 'sm',
              'sm:max-w-xl': size === 'md',
              'sm:max-w-3xl': size === 'lg',
              'sm:max-w-5xl': size === 'xl'
            },
            className
          )}
        >
          {children}
        </TransitionChild>
      </TransitionChild>
    </Transition.Root>
  )
}

export default ModalContainer
