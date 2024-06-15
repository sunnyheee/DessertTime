'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import styles from './AddAdiminInfo.module.css'
import Button from '../../../_components/common/Button'

function AddAdiminInfo({ onComplete }) {
  const router = useRouter()
  const [gender, setGender] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [address, setAddress] = useState('')
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear()
    const years = []
    for (let year = currentYear; year >= 1900; year -= 1) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>,
      )
    }
    return years
  }

  const isFormComplete = gender && birthYear && address

  const handleGenderChange = (e) => setGender(e.target.value)
  const handleBirthYearChange = (e) => setBirthYear(e.target.value)
  const handleAddressChange = (e) => setAddress(e.target.value)

  const getAddress = () => {
    if (!isScriptLoaded) return
    new window.daum.Postcode({
      oncomplete: (data) => {
        setAddress(data.address)
      },
    }).open()
  }

  const onPrevious = () => {
    router.push('/login/agreeMent')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormComplete) {
      onComplete({ gender, birthYear, address })
    }
  }

  return (
    <>
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <h2 className={styles.title}>추가 정보 입력</h2>
      <p className={styles.subdes}>
        추가 정보를 입력하면
        <br />
        추천후기를 알 수 있습니다.
      </p>
      <form onSubmit={handleSubmit} className={styles.addBox}>
        <div className={styles.formContent}>
          <h3 className={styles.addInfoTitle}>성별</h3>
          <div className={styles.addSelection}>
            <input
              className={styles.genderInput}
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleGenderChange}
            />
            <label htmlFor="male" className={styles.genderOption}>
              남성
            </label>
            <input
              className={styles.genderInput}
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleGenderChange}
            />
            <label htmlFor="female" className={styles.genderOption}>
              여성
            </label>
          </div>
          <h3 className={styles.addInfoTitle}>출생년도</h3>
          <div className={styles.addSelection}>
            <select
              name="birthYear"
              id="birthYear"
              className={styles.yearSelect}
              onChange={handleBirthYearChange}
            >
              <option value="">연도를 선택하세요</option>
              {generateYearOptions()}
            </select>
          </div>
          <h3 className={styles.addInfoTitle}>주소</h3>
          <div className={styles.addSelection}>
            <input
              className={styles.addressInput}
              type="text"
              id="address"
              name="address"
              placeholder="주소를 입력해주세요"
              value={address}
              onChange={handleAddressChange}
              onClick={getAddress}
              readOnly
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button text="이전" className={styles.prev} onClick={onPrevious} />
          <Button
            text="다음"
            type="submit"
            onClick={handleSubmit}
            className={
              isFormComplete
                ? `${styles.buttonComplete} ${styles.next}`
                : `${styles.next}`
            }
          />
        </div>
      </form>
    </>
  )
}

export default AddAdiminInfo
