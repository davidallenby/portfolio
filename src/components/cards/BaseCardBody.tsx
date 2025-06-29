interface BaseCardBodyProps {
  children: React.ReactNode
}

export default function BaseCardBody({ children }: BaseCardBodyProps) {
  return <div className='p-3 flex-1 flex flex-col'>{children}</div>
}
