import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

export const codecPro = localFont({
  src: [
    {
      path: '../assets/fonts/CodecPro-Light.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../assets/fonts/CodecPro-News.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/CodecPro-Bold.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/CodecPro-ExtraBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: 'Frontend Test - VerifyMyAge',
  description: 'frontend test'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${codecPro.className} flex lg:justify-end  lg:bg-[url(/images/bgSignUp.png)] lg:bg-[length:50%_100%] lg:bg-no-repeat`}
      >
        <main className="flex w-full flex-col bg-white lg:min-h-dvh lg:w-3/4 lg:place-self-end xl:w-1/2">
          {children}
        </main>
      </body>
    </html>
  )
}
