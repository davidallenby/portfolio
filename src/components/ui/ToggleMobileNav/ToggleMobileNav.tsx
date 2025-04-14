import { useMobileNavContext } from '@context/MobileNavContext'
import classNames from '@node_modules/classnames'
import { type FC } from 'react'

interface ToggleMobileNavProps {
  className?: string
}

const ToggleMobileNav: FC<ToggleMobileNavProps> = ({ className }) => {
  const { open, toggleOpen } = useMobileNavContext()
  const toggleMobileNavClass = classNames(
    'ToggleMobileNav flex flex-col justify-between position-relative h-6 w-10 bg-transparent border-0 z-11',
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
      <div className='ToggleMobileNav__line h-1 w-full bg-primary transition-all duration-200'></div>
      <div className='ToggleMobileNav__line h-1 w-full bg-primary transition-all duration-200'></div>
      <div className='ToggleMobileNav__line h-1 w-full bg-primary transition-all duration-200'></div>
    </button>
  )
}

export default ToggleMobileNav
