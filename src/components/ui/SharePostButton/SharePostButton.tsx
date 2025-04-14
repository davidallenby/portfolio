import { type FC } from 'react'
import { BsShare } from 'react-icons/bs'
import './SharePostButton.scss'

const SharePostButton: FC = () => (
  <button
    type='button'
    className='SharePostButton flex items-center bg-transparent border-0'
  >
    <BsShare size={18} className='me-sm-3' />
    <span className='hidden sm:inline subtitle'>Share</span>
  </button>
)

export default SharePostButton
