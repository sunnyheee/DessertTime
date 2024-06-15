'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Footer from '../_components/common/Footer'
import styles from './page.module.css'
import Header from '../_components/common/Header'
import EditIcon from '../_components/icon/EditIcon'

const Reviewpage = () => {
  const [daysLeft, setDaysLeft] = useState(0)
  const [showDelete, setShowDelete] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [iconColor, setIconColor] = useState({
    fill: '#828282',
    stroke: '#828282',
  })

  useEffect(() => {
    const updateDaysLeft = () => {
      const now = new Date()
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      const daysLeftNum = Math.floor(
        (lastDayOfMonth - now) / (1000 * 60 * 60 * 24),
      )
      setDaysLeft(daysLeftNum)
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

  const handleWriteClick = () => {
    setClicked(true)
    setIconColor({ fill: 'var(--pointColor);', stroke: 'var(--pointColor);' })

    setTimeout(() => {
      setClicked(false)
      setIconColor({ fill: '#828282', stroke: '#828282' })
    }, 500)
  }

  return (
    <>
      <section className="sec">
        <div className={styles.homeSec}>
          <div className={styles.header1}>
            <Header
              title="후기작성"
              showBackButton={false}
              showIcons
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
                <button
                  className={`${styles.write} ${clicked ? styles.clicked : ''}`}
                  onClick={handleWriteClick}
                  type="button"
                >
                  {/* SVG를 컴포넌트로 만들었어요! */}
                  <EditIcon fill={iconColor.fill} stroke={iconColor.stroke} />
                </button>
                <button
                  className={styles.dotsButton}
                  onClick={handleDotsClick}
                  type="button"
                >
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
                      <button
                        className={`${styles.deleteContainer} ${styles.showDeleteContainer}`}
                        onClick={handleDeleteClick}
                        type="button"
                      >
                        <Image
                          src="/images/delete.png"
                          width={18}
                          height={18}
                          alt="쓰레기통"
                        />
                        <button className={styles.deleteButton} type="button">
                          삭제하기
                        </button>
                      </button>
                    )}
                  </div>
                </button>
              </div>
            </div>

            <button className={styles.upload} type="button">
              새로운 영수증 등록하기
            </button>
          </div>
        </div>
      </section>
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
                type="button"
              >
                삭제하기
              </button>
              <button
                className={`${styles.modalButton} ${styles.cancelButton}`}
                onClick={handleCancelDelete}
                type="button"
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
