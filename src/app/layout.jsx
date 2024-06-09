"use client"; 
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import './reset.css';
import Footer from './components/Footer';
import { usePathname } from 'next/navigation';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'DessertTime',
  description: '',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const noFooterPages = ['/login']; // Add any other paths where footer should be hidden

  const showFooter = !noFooterPages.includes(pathname);

  return (
    <html lang="ko">
      <body className={`wrapper ${notoSansKr.className}`}>
        {children}
        {showFooter && <Footer />}
      </body>
    </html>
  );
}
