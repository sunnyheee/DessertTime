import { Noto_Sans_KR } from 'next/font/google'

import './globals.css'
import './reset.css'
import Footer from './components/common/Footer'

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'DessertTime',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <main className="main">
          <div className="wrapper">{children}</div>
        </main>
      </body>
    </html>
  )
}
