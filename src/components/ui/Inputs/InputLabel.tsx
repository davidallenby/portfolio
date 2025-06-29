import classNames from '@node_modules/classnames'
import { type FC } from 'react'

interface InputLabelProps {
  children: React.ReactNode
  className?: string
  htmlFor?: string
}

const InputLabel: FC<InputLabelProps> = ({ children, className, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames('text-sm subtitle mb-0', className)}
    >
      {children}
    </label>
  )
}

export default InputLabel
