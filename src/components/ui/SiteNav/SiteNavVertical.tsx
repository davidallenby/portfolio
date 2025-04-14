import { SITENAV_ITEMS } from '@constants/navigation'

export default function SiteNavVertical() {
  return <ul className='list-none mb-0'>{SITENAV_ITEMS.map()}</ul>
}
