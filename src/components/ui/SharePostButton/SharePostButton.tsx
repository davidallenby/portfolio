import { type FC } from 'react'
import { BsShare } from 'react-icons/bs'

const SharePostButton: FC = () => (
  <button
    type='button'
    className='SharePostButton flex items-center bg-transparent border-0 transition-all duration-250 hover:bg-primary-100 hover:text-primary'
  >
    <BsShare size={18} className='me-sm-3 fill-subtitle' />
    <span className='hidden sm:inline subtitle'>Share</span>
  </button>
)

export default SharePostButton
