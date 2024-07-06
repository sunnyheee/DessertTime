'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './Header.module.css'

const Header = ({
  title,
  showBackButton = true,
  showIcons = true,
  showMainLogo = true,
}) => {
  const router = useRouter()

  const prev = () => {
    router.back()
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.head}>
      {showBackButton && (
        <Image
          src="/images/icon.png"
          alt="이전"
          width={14}
          height={14}
          onClick={prev}
          className={styles.backButton}
        />
      )}
      {showMainLogo && (
        <Image
          src="/images/headerlogo.svg"
          alt="dessertTime"
          width={216}
          height={29}
          className={styles.mainLogo}
          style={{ cursor: 'pointer' }}
          onClick={scrollToTop}
        />
      )}
      <h2 className={styles.title}>{title}</h2>
      {showIcons && (
        <div className={styles.icon}>
          <Image src="/images/search.png" alt="검색" width={18} height={18} />
          <Image src="/images/bell.png" alt="알림" width={24} height={24} />
        </div>
      )}
    </div>
  )
}

export default Header
