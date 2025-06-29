import ReactQueryProvider from '@context/ReactQueryProvider'
import type { Metadata } from 'next'
import '../../node_modules/react-loading-skeleton/dist/skeleton.css'
import '../styles/globals.css'
export const metadata: Metadata = {
  title: `David Allenby | Lead frontend developer based in Melbourne, Australia`,
  description:
    "Hi, I'm David. I'm a lead frontend developer based in Melbourne, Australia. I like making apps, and taking naps."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='flex flex-col flex-grow-1 h-screen'>
      <head>
        <script>let FF_FOUC_FIX;</script>
      </head>
      <body className='flex flex-col flex-grow-1 bg-off-white text-body'>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
