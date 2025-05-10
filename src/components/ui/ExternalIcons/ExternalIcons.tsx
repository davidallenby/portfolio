'use client'
import classNames from '@node_modules/classnames'
import Link from 'next/link'
import { type FC } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'

interface ExternalIconsProps {
  className?: string
  colorInverted?: boolean
}

const ExternalIcons: FC<ExternalIconsProps> = ({
  className,
  colorInverted = false
}) => {
  const styleClass = classNames(`ExternalIcons flex items-center`, className)

  const linkClass = classNames('me-4', {
    'text-primary-100 hover:text-white': colorInverted,
    'text-primary hover:text-body': !colorInverted
  })

  return (
    <div className={styleClass}>
      <Link
        href='https://github.com/davidallenby'
        rel='noreferrer'
        target='_blank'
        className={linkClass}
      >
        <BsGithub fontSize={20} />
      </Link>
      <Link
        href='https://www.linkedin.com/in/davidallenby/'
        rel='noreferrer'
        target='_blank'
        className={linkClass}
      >
        <BsLinkedin fontSize={20} />
      </Link>
      <Link
        href='https://codepen.io/davidallenby'
        rel='noreferrer'
        target='_blank'
        className={linkClass}
      >
        <FaCodepen fontSize={20} />
      </Link>
    </div>
  )
}

export default ExternalIcons
