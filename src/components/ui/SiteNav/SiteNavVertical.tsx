import { SITENAV_ITEMS } from '@constants/navigation'
import classNames from 'classnames'
import SiteNavLink from './SiteNavLink'

export default function SiteNavVertical({
  colorInverted = false,
  className
}: {
  colorInverted?: boolean
  className?: string
}) {
  return (
    <ul className={classNames('list-none mb-0', className)}>
      {SITENAV_ITEMS.map((item) => (
        <li key={item.url} className='mb-1'>
          <SiteNavLink item={item} colorInverted={colorInverted} />
        </li>
      ))}
    </ul>
  )
}
