"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import styles from './page.module.css'
import Header from '../components/common/Header'
import Image from 'next/image'

const Reviewpage = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const updateDaysLeft = () => {
      const now = new Date();
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      const daysLeft = Math.floor((lastDayOfMonth - now) / (1000 * 60 * 60 * 24));
      setDaysLeft(daysLeft);
    };

    updateDaysLeft();
    const intervalId = setInterval(updateDaysLeft, 1000 * 60 * 60 * 24); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <>
      <main className="main">
        <Header title="후기작성" showBackButton={false} showIcons = {true} showMainLogo = {false}/>
        <div className={styles.container}>
          <div className={styles.subtit}>
            <div className={styles.subleft}>
              <h2 className={styles.subtxt}>작성 가능 후기</h2>
              <p className={styles.txt}>7건</p>
            </div>
            <div className={styles.subright}>
              <p>{daysLeft}일 남았어요!</p>
              <Image
                src="/images/alertcircle.png"
                alt="alert"
                width={14}
                height={14}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer activeButton="review" />
    </>
  )
}

export default Reviewpage
