'use client'

import SiteLogo from '@components/ui/SiteLogo/SiteLogo'
import { MobileNavContextProvider } from '@context/MobileNavContext'
import { useBreakpointBoolean } from '@hooks/dom'
import { type FC } from 'react'
import MobileMenu from '../MobileMenu/MobileMenu'
import SiteNav from '../SiteNav/SiteNav'
import ToggleMobileNav from '../ToggleMobileNav/ToggleMobileNav'
import './SiteHeader.scss'

const SiteHeader: FC = () => {
  const { isMobile } = useBreakpointBoolean()

  return (
    <MobileNavContextProvider>
      <header className='SiteHeader'>
        <div className='contained position-relative flex items-center justify-content-between gutter-x py-3'>
          <SiteLogo className='me-4' />
          <ToggleMobileNav className='md:hidden' />
          <SiteNav className='hidden md:inline-flex' />
          {isMobile && <MobileMenu />}
        </div>
      </header>
    </MobileNavContextProvider>
  )
}

export default SiteHeader
