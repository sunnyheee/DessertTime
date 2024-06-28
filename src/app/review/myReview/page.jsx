'use client'
import styles from './page.module.css'
import { useState } from 'react'
import Header from '../../_components/common/Header'
import Footer from '../../_components/common/Footer'
import Image from 'next/image'
import StarIcon from '../../_components/icon/StarIcon'

const MyReview = () => {
  const reviews = [
    {
      id: 1,
      store: "온혜화",
      dessert: "바질치즈스콘",
      stars: 3,
      imagePath: "/images/scon.png",
      state: 1,
      year: 2024,
      month: 6,
    },
    {
      id: 2,
      store: "또 다른 매장",
      dessert: "초콜릿 케이크",
      stars: 4,
      imagePath: "/images/scon.png",
      state: 0,
      year: 2024,
      month: 6,
    },
    {
      id: 3,
      store: "또 다른 매장2",
      dessert: "딸기 케이크",
      stars: 2,
      imagePath: "/images/scon.png",
      state: 3,
      year: 2024,
      month: 5,
    },
  ]

  const [showModal, setShowModal] = useState(false)
  const [activeReviewId, setActiveReviewId] = useState(null)
  const [deleteReviewId, setDeleteReviewId] = useState(null)

  const handleConfirmDelete = () => {
    setShowModal(false)

  }

  const handleCancelDelete = () => {
    setShowModal(false)
  }

  const handleDotsClick = (id) => {
    setActiveReviewId(prevState => prevState === id ? null : id)
  }

  const handleDeleteClick = (reviewId) => {
    setDeleteReviewId(reviewId)
    setShowModal(true)
  }

  const getStatusText = (state) => {
    switch(state) {
      case 1: return { text: '등록', color: '#048c44', backgroundColor: 'rgba(20, 174, 92, 0.2)' }
      case 2: return { text: '대기', color: '#068dff', backgroundColor: 'rgba(6, 141, 255, 0.2)' }
      case 3: return { text: '신고', color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.2)' }
      default: return { text: '삭제', color: '#888888', backgroundColor: 'rgba(136, 136, 136, 0.2)' }
    }
  }

  const groupedReviews = reviews.reduce((acc, review) => {
    const key = `${review.year}-${review.month}`
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(review)
    return acc
  }, {})

  return (
    <>
      <section className="sec">
        <div className={styles.wrap}>
          <Header
            title="내 후기"
            showBackButton={true}
            showIcons={true}
            showMainLogo={false}
          />
          {Object.keys(groupedReviews).map((key) => {
            const [year, month] = key.split('-')
            return (
              <div key={key} className={styles.content}>
                <p className={styles.date}>{`${year}년 ${month}월`}</p>
                {groupedReviews[key].map((review) => {
                  const status = getStatusText(review.state)
                  const stateStyle = {
                    color: status.color,
                    backgroundColor: status.backgroundColor,
                  }
                  return (
                    <div key={review.id} className={styles.container}>
                      {review.state === 0 && (
                        <div className={styles.overlay}>
                          관리자에 의해 삭제된 후기입니다.
                        </div>
                      )}
                      {review.state === 3 && (
                        <div className={styles.overlay}>
                          신고된 후기입니다.
                        </div>
                      )}
                      <Image
                        className={styles.image}
                        src={review.imagePath}
                        width={108}
                        height={80}
                        alt="dessert"
                      />
                      <div className={styles.txtBox}>
                        <div className={styles.left}>
                          <p className={styles.store}>{review.store}</p>
                          <h2 className={styles.dessert}>{review.dessert}</h2>
                          {Array.from({ length: 4 }).map((_, i) => (
                            <StarIcon
                              key={i}
                              fill={i < review.stars ? '#FFA629' : '#CCCCCC'}
                              className={styles.icon}
                              width={20}
                              height={20}
                            />
                          ))}
                        </div>
                        <div className={styles.right}>
                          <p className={styles.state} style={stateStyle}>
                            {status.text}
                          </p>
                          <button
                            className={styles.dotsButton}
                            onClick={() => handleDotsClick(review.id)}
                            type="button"
                          >
                            <div
                              className={`${styles.dot} ${activeReviewId === review.id ? styles.active : ''}`}
                            ></div>
                            <div
                              className={`${styles.dot} ${activeReviewId === review.id ? styles.active : ''}`}
                            ></div>
                            <div
                              className={`${styles.dot} ${activeReviewId === review.id ? styles.active : ''}`}
                            ></div>
                            <div className={styles.deletewrap}>
                              {activeReviewId === review.id && (
                                <button
                                  className={`${styles.deleteContainer} ${styles.showDeleteContainer}`}
                                  onClick={() => handleDeleteClick(review.id)}
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
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <Footer activeButton="mypage" />
        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p className={styles.check}>
                삭제한 후기는 복구가 불가능합니다.<br/>
                정말 삭제 하시겠습니까?
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
      </section>
    </>
  )
}

export default MyReview
