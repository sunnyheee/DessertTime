'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './agree.module.css'

export default function AgreeMent() {
  const [allChecked, setAllChecked] = useState(false)
  const [firstChecked, setFirstChecked] = useState(false)
  const [twiceChecked, setTwiceChecked] = useState(false)
  const [thirdChecked, setThirdChecked] = useState(false)
  const [isNextEnabled, setIsNextEnabled] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsNextEnabled(firstChecked && twiceChecked)
  }, [firstChecked, twiceChecked])

  const handleAllCheckboxChange = () => {
    const newCheckedState = !allChecked
    setAllChecked(newCheckedState)
    setFirstChecked(newCheckedState)
    setTwiceChecked(newCheckedState)
    setThirdChecked(newCheckedState)
  }

  const handlePrevButtonClick = () => {
    router.push('/login')
  }
  // 다음버튼 클릭시 추가정보입력으로 이동
  const handleSubmit = (e) => {
    router.push('/login/addadmin')
  }

  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <Image
          src="/images/cake.png"
          alt="로고"
          width={63}
          height={64}
          className={styles.logo}
        />
        <p className={styles.headtxt}>
          디저트타임
          <b className={styles.subtxt}>
            에<br />
            오신걸환영합니다!
          </b>
        </p>

        <div className={`${styles.check} ${styles.firstCheck}`}>
          <input
            type="checkbox"
            id="all"
            className={styles.checkbox}
            checked={allChecked}
            onChange={handleAllCheckboxChange}
          />
          <label htmlFor="all" className={`${styles.agree} ${styles.allagree}`}>
            전체동의 (선택 동의 포함)
          </label>
        </div>

        <div className={styles.check}>
          <input
            type="checkbox"
            id="first"
            className={styles.checkbox}
            checked={firstChecked}
            onChange={(e) => setFirstChecked(e.target.checked)}
          />
          <label htmlFor="first" className={styles.agree}>
            (필수) 홈페이지 이용약관
          </label>
        </div>

        <div className={styles.check}>
          <input
            type="checkbox"
            id="twice"
            className={styles.checkbox}
            checked={twiceChecked}
            onChange={(e) => setTwiceChecked(e.target.checked)}
          />
          <label htmlFor="twice" className={styles.agree}>
            (필수) 개인정보 제공 활용
          </label>
        </div>

        <div className={styles.check}>
          <input
            type="checkbox"
            id="third"
            className={styles.checkbox}
            checked={thirdChecked}
            onChange={(e) => setThirdChecked(e.target.checked)}
          />
          <label htmlFor="third" className={styles.agree}>
            (선택) 마케팅 및 광고 활용
          </label>
        </div>

        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={`${styles.button} ${styles.prevbtn}`}
            onClick={handlePrevButtonClick}
          >
            이전
          </button>
          <button
            type="submit"
            className={`${styles.button} ${styles.nextbtn} ${isNextEnabled ? styles.nextbtnActive : ''}`}
            disabled={!isNextEnabled}
            onClick={handleSubmit}
          >
            다음
          </button>
        </div>
      </div>
    </main>
  )
}
