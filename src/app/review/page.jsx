'use client'
import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import styles from './page.module.css'
import Header from '../components/common/Header'
import Image from 'next/image'

const Reviewpage = () => {
  const [daysLeft, setDaysLeft] = useState(0)
  const [showDelete, setShowDelete] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const updateDaysLeft = () => {
      const now = new Date()
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      const daysLeft = Math.floor(
        (lastDayOfMonth - now) / (1000 * 60 * 60 * 24),
      )
      setDaysLeft(daysLeft)
    }

    updateDaysLeft()
    const intervalId = setInterval(updateDaysLeft, 1000 * 60 * 60 * 24)

    return () => clearInterval(intervalId)
  }, [])
  const handleDotsClick = () => {
    setShowDelete((prevState) => !prevState)
  }

  const handleDeleteClick = () => {
    setShowModal(true)
  }

  const handleConfirmDelete = () => {
    setShowModal(false)
  }

  const handleCancelDelete = () => {
    setShowModal(false)
  }

  return (
    <>
      <main className="main">
        <div className={styles.homeSec}>
          <div className={styles.header1}>
            <Header
              title="후기작성"
              showBackButton={false}
              showIcons={true}
              showMainLogo={false}
            />
          </div>
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
                  className={styles.alert}
                />
              </div>
            </div>
            <div className={styles.review}>
              <div className={styles.revleft}>
                <h2 className={styles.store}>온혜화</h2>
                <p className={styles.dessert}>초코 치즈 스콘</p>
              </div>
              <div className={styles.revright}>
                <div className={styles.write}>
                  <Image
                    src="/images/edit.png"
                    width={14}
                    height={14}
                    alt="작성"
                  />
                </div>
                <div className={styles.dotsButton} onClick={handleDotsClick}>
                  <div
                    className={`${styles.dot} ${showDelete ? styles.active : ''}`}
                  ></div>
                  <div
                    className={`${styles.dot} ${showDelete ? styles.active : ''}`}
                  ></div>
                  <div
                    className={`${styles.dot} ${showDelete ? styles.active : ''}`}
                  ></div>
                  <div className={styles.deletewrap}>
                    {showDelete && (
                      <div
                        className={`${styles.deleteContainer} ${styles.showDeleteContainer}`}
                        onClick={handleDeleteClick}
                      >
                        <Image
                          src="/images/delete.png"
                          width={18}
                          height={18}
                          alt="쓰레기통"
                        />
                        <button className={styles.deleteButton}>
                          삭제하기
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button className={styles.upload}>새로운 영수증 등록하기</button>
          </div>
        </div>
      </main>
      <Footer activeButton="review" />

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p className={styles.check}>
              작성 가능 후기를 <br />
              정말 삭제하시겠습니까?
            </p>
            <div className={styles.modalButtons}>
              <button
                className={`${styles.modalButton} ${styles.confirmButton}`}
                onClick={handleConfirmDelete}
              >
                삭제하기
              </button>
              <button
                className={`${styles.modalButton} ${styles.cancelButton}`}
                onClick={handleCancelDelete}
              >
                아니오
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Reviewpage
