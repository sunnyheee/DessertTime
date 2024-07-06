'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../_components/common/Header'
import styles from './page.module.css'

const Resign = () => {
  const [firstChecked, setFirstChecked] = useState(false)
  const [twiceChecked, setTwiceChecked] = useState(false)
  const [thirdChecked, setThirdChecked] = useState(false)
  const [fourthChecked, setFourthChecked] = useState(false)
  const [textareaValue, setTextareaValue] = useState('')
  const [isNextEnabled, setIsNextEnabled] = useState(false)

  const handleCheckboxChange = (index) => {
    setFirstChecked(index === 1)
    setTwiceChecked(index === 2)
    setThirdChecked(index === 3)
    setFourthChecked(index === 4)
    if (index !== 4) {
      setTextareaValue('')
    }
  }

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value)
  }

  const router = useRouter()

  const handleResign = () => {
    router.push('/resign/success')
  }
  const handleBack = () => {
    router.back()
  }

  useEffect(() => {
    setIsNextEnabled(
      firstChecked ||
        twiceChecked ||
        thirdChecked ||
        (fourthChecked && textareaValue.trim() !== ''),
    )
  }, [firstChecked, twiceChecked, thirdChecked, fourthChecked, textareaValue])

  return (
    <section className="sec">
      <Header title="탈퇴하기" showIcons={false} showMainLogo={false} />
      <div className={styles.wrap}>
        <div className={styles.guide}>
          <h1 className={styles.title}>정말 디저트타임을 탈퇴하시나요?</h1>
          <p className={styles.explanation}>
            * 기존에 작성하신 모든 후기는 자동으로 삭제되지 않으며, 탈퇴
            이후에는 작성자 정보를 찾을 수 없어 삭제가 불가능합니다. 후기 삭제를
            원하시는 경우 탈퇴 전 직접 삭제하시 거나, 문의하기를 통해 삭제요청
            후 결과를 확인하시고 탈퇴를 진행해주세요.
            <br />
            <br />* 보유 밀은 탈퇴 즉시 삭제되며, 복구할 수 없습니다.
          </p>
        </div>
        <div className={styles.reason}>
          <h1 className={styles.title}>서비스 탈퇴 이유는 무엇인가요?</h1>
          <div className={styles.check}>
            <input
              type="checkbox"
              id="first"
              className={styles.checkbox}
              checked={firstChecked}
              onChange={() => handleCheckboxChange(1)}
            />
            <label htmlFor="first" className={styles.agree}>
              자주 사용하지 않아서
            </label>
          </div>
          <div className={styles.check}>
            <input
              type="checkbox"
              id="twice"
              className={styles.checkbox}
              checked={twiceChecked}
              onChange={() => handleCheckboxChange(2)}
            />
            <label htmlFor="twice" className={styles.agree}>
              디저트 정보가 부족해서
            </label>
          </div>
          <div className={styles.check}>
            <input
              type="checkbox"
              id="third"
              className={styles.checkbox}
              checked={thirdChecked}
              onChange={() => handleCheckboxChange(3)}
            />
            <label htmlFor="third" className={styles.agree}>
              서비스 사용이 어려워서
            </label>
          </div>
          <div className={styles.check}>
            <input
              type="checkbox"
              id="fourth"
              className={styles.checkbox}
              checked={fourthChecked}
              onChange={() => handleCheckboxChange(4)}
            />
            <label htmlFor="fourth" className={styles.agree}>
              기타(직접입력)
            </label>
          </div>
          <textarea
            className={styles.textarea}
            placeholder="최대 500자로 입력 가능합니다."
            disabled={!fourthChecked}
            value={textareaValue}
            onChange={handleTextareaChange}
          ></textarea>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={`${styles.button} ${styles.nextbtn} ${isNextEnabled ? styles.nextbtnActive : ''}`}
            disabled={!isNextEnabled}
            onClick={handleResign}
          >
            탈퇴하기
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.prevbtn}`}
            onClick={handleBack}
          >
            취소
          </button>
        </div>
      </div>
    </section>
  )
}

export default Resign
