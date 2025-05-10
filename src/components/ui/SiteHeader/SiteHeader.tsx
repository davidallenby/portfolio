'use client'

import SiteLogo from '@components/ui/SiteLogo/SiteLogo'
import { MobileNavContextProvider } from '@context/MobileNavContext'
import { useBreakpointBoolean } from '@hooks/dom'
import { type FC } from 'react'
import MobileMenu from '../MobileMenu/MobileMenu'
import SiteNav from '../SiteNav/SiteNav'
import ToggleMobileNav from '../ToggleMobileNav/ToggleMobileNav'

const SiteHeader: FC = () => {
  const { isMobile } = useBreakpointBoolean()

  return (
    <MobileNavContextProvider>
      <header className='SiteHeader top-0 z-50 sticky bg-off-white'>
        <div className='container mx-auto position-relative flex items-center justify-between py-3 px-4 gap-4'>
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
