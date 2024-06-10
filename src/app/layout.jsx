"use client"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; 
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import './reset.css';

const Footer = dynamic(() => import('./components/common/Footer'), { ssr: false }); 
const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

// use client 쓰려면 이게 자꾸 오류가떠서 일단 주석처리해놨습니다..
// export const metadata = {
//   title: 'DessertTime',
//   description: '',
// };

export default function RootLayout({ children }) {
  const [hideFooter, setHideFooter] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/login')) {
        setHideFooter(true);
      
      } else {
        setHideFooter(false);
      }
    }
  }, []);

  return (
    <html lang="ko">
      <body className={`wrapper ${notoSansKr.className}`}>
        {children}
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
