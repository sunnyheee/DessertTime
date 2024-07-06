'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../_components/common/Header'

const Setting = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <section className="sec">
      <Header title="설정" showIcons={false} showMainLogo={false} />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.txt}>알림설정</p>
          <div
            className={`${styles.switch} ${isActive ? styles.active : ''}`}
            onClick={handleToggle}
          >
            <div className={styles.toggle}></div>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.txt}>이용약관</p>
          <Image
            src="/images/chevronRight.png"
            alt="chevronRight"
            width={8}
            height={13}
            className={styles.chevronRight}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.txt}>개인정보처리방침</p>
          <Image
            src="/images/chevronRight.png"
            alt="chevronRight"
            width={8}
            height={13}
            className={styles.chevronRight}
          />
        </div>
        <div className={styles.btnWrap}>
          <button className={styles.btn} type="button">
            로그아웃
          </button>
          <p className={styles.txtbtn}>
            디저트타임을 탈퇴하려면{' '}
            <a href="/resign" className={styles.link}>
              여기
            </a>
            를 눌러주세요
          </p>
        </div>
      </div>
    </section>
  )
}

export default Setting
