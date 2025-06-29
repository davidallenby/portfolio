import Button from '@components/ui/Button/Button'
import classNames from 'classnames'
import { ComponentProps, forwardRef } from 'react'

export type ModalButtonProps = Omit<ComponentProps<typeof Button>, 'size'> & {
  children: string
}

export interface ModalFooterProps
  extends Omit<ComponentProps<'footer'>, 'children'> {
  secondaryButtonProps?: ModalButtonProps
  primaryButtonProps?: ModalButtonProps
}

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, primaryButtonProps, secondaryButtonProps, ...props }, ref) => {
    if (!primaryButtonProps && !secondaryButtonProps) return null
    return (
      <footer
        {...props}
        ref={ref}
        className={classNames('flex flex-row-reverse gap-2 p-6', className)}
      >
        <div className='flex flex-col items-center gap-2 sm:flex-row-reverse sm:flex-row'>
          {!!primaryButtonProps && (
            <Button
              className='xs:w-fit w-full'
              variant='primary'
              size='md'
              {...primaryButtonProps}
            />
          )}
          {!!secondaryButtonProps && (
            <Button
              className='xs:w-fit w-full'
              variant='secondary'
              size='md'
              {...secondaryButtonProps}
            />
          )}
        </div>
      </footer>
    )
  }
)

export default ModalFooter
