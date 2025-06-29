import { DialogTitle } from '@headlessui/react'
import { type FC, PropsWithChildren } from 'react'
import ModalContainer, { ModalContainerProps } from './ModalContainer'
import ModalContent from './ModalContent'
import ModalFooter, { ModalFooterProps } from './ModalFooter'

export type ModalProps = PropsWithChildren<
  ModalContainerProps & ModalFooterProps
>

const Modal: FC<ModalProps> = ({
  isOpen,
  onDismiss,
  children,
  primaryButtonProps,
  secondaryButtonProps,
  title,
  ...props
}) => {
  return (
    <ModalContainer isOpen={isOpen} onDismiss={onDismiss} {...props}>
      <DialogTitle className='px-6 py-4 mb-0!' as='h4'>
        {title}
      </DialogTitle>
      <ModalContent>{children}</ModalContent>
      <ModalFooter
        className='px-6 py-4'
        primaryButtonProps={primaryButtonProps}
        secondaryButtonProps={secondaryButtonProps}
      />
    </ModalContainer>
  )
}

export default Modal
