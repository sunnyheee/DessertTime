'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styles from './inquiry.module.css'
import Header from '../_components/common/Header'

export default function Inquiry() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  const router = useRouter()

  const updateButtonState = (emailValue, messageValue) => {
    if (emailValue.trim() !== '' && messageValue.trim() !== '') {
      setIsButtonEnabled(true)
    } else {
      setIsButtonEnabled(false)
    }
  }

  const handleEmailChange = (e) => {
    const { value } = e.target
    setEmail(value)
    updateButtonState(value, message)
  }

  const handleMessageChange = (e) => {
    const { value } = e.target
    setMessage(value)
    updateButtonState(email, value)
  }
  const handleSubmit = () => {
    router.push('/inquiry/success')
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header title="문의하기" showIcons={false} showMainLogo={false} />
        <div className={styles.content}>
          <p className={styles.email}>답변용 이메일</p>
          <input
            type="email"
            className={styles.input}
            placeholder="답변받으실 이메일을 입력하세요"
            value={email}
            onChange={handleEmailChange}
          />
          <p className={styles.con}>문의내용</p>
          <textarea
            className={styles.textarea}
            placeholder="최대 300자로 입력 가능합니다"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <button
            type="button"
            className={`${styles.btn} ${isButtonEnabled ? styles.btnActive : ''}`}
            onClick={handleSubmit}
            disabled={!isButtonEnabled}
          >
            보내기
          </button>
        </div>
      </div>
    </main>
  )
}
