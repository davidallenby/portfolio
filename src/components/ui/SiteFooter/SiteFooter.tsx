import ExternalIcons from '@components/ui/ExternalIcons/ExternalIcons'
import SiteLogo from '@components/ui/SiteLogo/SiteLogo'
import SiteNav from '@components/ui/SiteNav/SiteNav'
import SiteNavVertical from '@components/ui/SiteNav/SiteNavVertical'
import { type FC } from 'react'
import { getCurrentYear } from '../../../helpers/common'
import './SiteFooter.scss'

const SiteFooter: FC = () => (
  <footer className='SiteFooter bg-primary py-12 md:py-16'>
    <div className='container mx-auto px-4'>
      <div className='block md:flex justify-between flex-grow-1'>
        <div className='mb-5 md:mb-0 flex items-center'>
          <SiteLogo colorInverted className='me-4' />
          <small className='hidden md:block text-primary-100'>
            <span>&copy; David Allenby {getCurrentYear()}</span>
          </small>
        </div>
        <SiteNavVertical colorInverted className='md:hidden mb-5' />
        <div className='flex items-center md:justify-end flex-grow-1'>
          <SiteNav colorInverted className='mb-0 mt-2 me-4' />
          <ExternalIcons colorInverted className='mb-4 md:mb-0' />
        </div>

        <small className='block md:hidden'>
          <span>&copy; David Allenby {getCurrentYear()}</span>
        </small>
      </div>
    </div>
  </footer>
)

export default SiteFooter
