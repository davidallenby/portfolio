import { useMobileNavContext } from '@context/MobileNavContext'
import classNames from '@node_modules/classnames'
import { type FC } from 'react'

interface ToggleMobileNavProps {
  className?: string
}

const ToggleMobileNav: FC<ToggleMobileNavProps> = ({ className }) => {
  const { open, toggleOpen } = useMobileNavContext()
  const toggleMobileNavClass = classNames(
    'ToggleMobileNav flex flex-col justify-between relative h-6 w-10 bg-transparent border-0 z-11',
    {
      'ToggleMobileNav--open': open
    },
    className
  )

  return (
    <button
      type='button'
      className={toggleMobileNavClass}
      onClick={() => toggleOpen(!open)}
    >
      <div
        className={classNames(
          'ToggleMobileNav__line h-0.5 w-full bg-primary transition-all duration-200',
          {
            'translate-y-[12px] translate-x-0 rotate-[32deg] bg-primary-100':
              open
          }
        )}
      ></div>
      <div
        className={classNames(
          'ToggleMobileNav__line h-0.5 w-full bg-primary transition-all duration-200',
          {
            'opacity-0 bg-primary-100': open
          }
        )}
      ></div>
      <div
        className={classNames(
          'ToggleMobileNav__line h-0.5 w-full bg-primary transition-all duration-200',
          {
            '-translate-y-[11px] translate-x-0 -rotate-[32deg] bg-primary-100':
              open
          }
        )}
      ></div>
    </button>
  )
}

export default ToggleMobileNav
