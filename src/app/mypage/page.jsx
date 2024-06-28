import React from 'react'
import Footer from '../_components/common/Footer'
import Image from 'next/image'
import styles from './page.module.css'

const Mypage = () => {
  return (
    <>
      <section className="sec">
        <div className={styles.wrap}>
          <div className={styles.head}>
            <a href='/mypage/setting'>
            <Image
              src="/images/setting.png"
              alt="setting"
              width={20}
              height={20}
              className={styles.setting}
            />
            </a>
          </div>
          <div className={styles.content}>
            <Image
              src="/images/profile.png"
              alt="profile"
              width={106}
              height={106}
              className={styles.profile}
            />
            <h1 className={styles.nickname}>1234567번째 달달한 고구마</h1>
            <button className={styles.correction}>내 정보 수정</button>
            <div className={styles.firstWrap}>
              <div className={styles.myReview}>
                <p className={styles.left}>내 후기</p>
                <div className={styles.right}>
                  <p className={styles.txt}>23 개</p>
                  <a href='/review/myReview'>
                  <Image
                  src="/images/chevronRight.png"
                  alt='chevronRight'
                  width={7.4}
                  height={12}
                  className={styles.chevronRight}
                  />
                  </a>
                </div>
              </div>
              <div className={styles.myReview}>
                <p className={styles.left}>보유 밀</p>
                <div className={styles.right}>
                  <div className={styles.txtWrap}>
                  <p className={styles.txt}>3,000</p>
                  <a href=''>
                  <Image
                    src="/images/meal.png"
                    width={18}
                    height={18}
                    alt='meal'
                    className={styles.meal}
                  />
                  </a>
                  </div>
                  <Image
                  src="/images/chevronRight.png"
                  alt='chevronRight'
                  width={7.4}
                  height={12}
                  className={styles.chevronRight}
                  />
                </div>
              </div>
            </div>
            <div className={styles.twiceWrap}>
              <a href='' className={styles.box}>
                <img
                  src="/images/announcement.png"
                  className={styles.boxImage}
                />
                <p className={styles.boxTxt}>공지사항</p>
              </a>
              <a href='' className={styles.box}>
                <img
                  src="/images/gift.png"
                  className={styles.boxImage}
                />
                <p className={styles.boxTxt}>이벤트</p>
              </a>
              <a href='/inquiry' className={styles.box}>
                <img
                  src="/images/inquiry.png"
                  className={styles.boxImage}
                />
                <p className={styles.boxTxt}>문의사항</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer activeButton="mypage" />
    </>
  )
}

export default Mypage
