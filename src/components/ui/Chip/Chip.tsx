'use client'
import classNames from '@node_modules/classnames'
import { type FC, type ReactNode, useCallback, useMemo } from 'react'
import { CHIP_SIZE_CLASS, CHIP_SIZE_ICON_CLASS } from './config'

interface ChipProps {
  className?: string
  children?: ReactNode
  icon?: ReactNode
  size?: 'sm' | 'md'
  onClick?: (e: any) => void
  toggle?: boolean
}

const Chip: FC<ChipProps> = ({
  className,
  children,
  icon,
  size = 'md',
  onClick,
  toggle
}) => {
  /**
   * If an onClick method is present. We need to enable this for people using a
   * keyboard. (i.e. accessible users.)
   *
   * @param {*} e
   * @return {*}
   */
  const keyDownHandler = useCallback(
    (e: any) => {
      if (!onClick || e.key !== 'Enter') {
        return
      }
      clickHandler(e)
    },
    [onClick]
  )

  /**
   * Handles the click event.
   *
   * @param {*} e
   */
  const clickHandler = useCallback(
    (e: any) => {
      if (onClick) {
        onClick(e)
      }
    },
    [onClick]
  )

  const chipStyleClasses = useMemo(() => {
    return classNames(
      'inline-flex items-center rounded-sm transition-all duration-300 text-primary bg-beige border border-beige',
      className,
      {
        [CHIP_SIZE_CLASS[size]]: size,
        'cursor-pointer hover:bg-beige/50': !!onClick,
        'bg-primary text-white hover:bg-primary/80 border-primary': toggle
      }
    )
  }, [className, size, onClick, toggle])

  const tabIndex = useMemo(() => {
    return !!onClick ? 0 : undefined
  }, [onClick])

  return (
    <div
      className={chipStyleClasses}
      onClick={clickHandler}
      onKeyDown={keyDownHandler}
      tabIndex={tabIndex}
    >
      {icon && (
        <span className={`${CHIP_SIZE_ICON_CLASS[size]} me-2`}>{icon}</span>
      )}
      <span>{children}</span>
    </div>
  )
}

export default Chip
