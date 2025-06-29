import { ReactNode } from '@node_modules/@types/react'

interface FlexGridProps {
  children: ReactNode
}

export default function FlexGrid({ children }: FlexGridProps) {
  return <div className='flex flex-row'>{children}</div>
}
