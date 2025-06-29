import SiteFooter from '@components/ui/SiteFooter/SiteFooter'
import SiteHeader from '@components/ui/SiteHeader/SiteHeader'
import { type FC, type ReactNode } from 'react'

interface SiteLayoutProps {
  children: ReactNode
}

const SiteLayout: FC<SiteLayoutProps> = ({ children }) => (
  <>
    <SiteHeader />
    <main className='flex flex-col flex-grow-1'>{children}</main>
    <SiteFooter />
  </>
)

export default SiteLayout
