import ExternalIcons from '@components/ui/ExternalIcons/ExternalIcons'
import SiteLogo from '@components/ui/SiteLogo/SiteLogo'
import SiteNav from '@components/ui/SiteNav/SiteNav'
import { type FC } from 'react'
import { getCurrentYear } from '../../../helpers/common'
import './SiteFooter.scss'

const SiteFooter: FC = () => (
  <footer className='SiteFooter bg-primary'>
    <div className='container mx-auto'>
      <div className='block md:flex justify-between flex-grow-1'>
        <div className='mb-5 md:mb-0 flex items-center'>
          <SiteLogo colorInverted className='me-4' />
          <small className='hidden md:block'>
            <span>&copy; David Allenby {getCurrentYear()}</span>
          </small>
        </div>
        <SiteNav vertical colorInverted className='md:hidden mb-5' />
        <div className='flex items-center md:justify-end flex-grow-1'>
          <SiteNav colorInverted className='hidden md:block mb-0 mt-2 me-4' />
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
