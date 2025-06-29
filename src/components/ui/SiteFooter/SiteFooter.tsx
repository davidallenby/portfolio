import ExternalIcons from '@components/ui/ExternalIcons/ExternalIcons'
import SiteLogo from '@components/ui/SiteLogo/SiteLogo'
import SiteNav from '@components/ui/SiteNav/SiteNav'
import SiteNavVertical from '@components/ui/SiteNav/SiteNavVertical'
import { type FC } from 'react'
import { getCurrentYear } from '../../../helpers/common'

const SiteFooter: FC = () => (
  <footer className='SiteFooter bg-primary py-12 md:py-16'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-col md:flex-row justify-between flex-grow-1 gap-8'>
        <div className='mb-5 md:mb-0 flex items-center'>
          <SiteLogo colorInverted className='me-4' />
          <small className='hidden md:block text-primary-100'>
            <span>&copy; David Allenby {getCurrentYear()}</span>
          </small>
        </div>
        <SiteNavVertical
          colorInverted
          className='md:hidden mb-5 flex flex-col gap-4'
        />
        <div className='flex items-center md:justify-end flex-grow-1'>
          <SiteNav colorInverted className='me-4' />
          <ExternalIcons colorInverted className='mb-0' />
        </div>

        <small className='block md:hidden text-primary-100 mt-4'>
          <span>&copy; David Allenby {getCurrentYear()}</span>
        </small>
      </div>
    </div>
  </footer>
)

export default SiteFooter
