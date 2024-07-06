'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import Header from '../_components/common/Header'
import styles from './page.module.css'

const Profile = () => {
  const [nickname, setNickname] = useState('디저트타임')
  const [isChanged, setIsChanged] = useState(false)
  const router = useRouter()
  const [gender, setGender] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [address, setAddress] = useState('')
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  const handleInputChange = (e) => {
    setNickname(e.target.value)
    setIsChanged(e.target.value !== '디저트타임')
  }

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender)
  }

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
    if (typeof window !== 'undefined' && isScriptLoaded) {
      new window.daum.Postcode({
        oncomplete: (data) => {
          setAddress(data.address)
        },
      }).open()
    }
  }

  const onComplete = ({ gender1, birthYear1, address1 }) => {
    // TODO: onComplete 함수가 없어서 에러가 났어요! 일단 추가해놓을께요
    console.log('Form completed:', { gender, birthYear, address })
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
      <section className="sec">
        <button className={styles.save} type="button">
          저장
        </button>
        <Header title="내 정보 수정" showMainLogo={false} showIcons={false} />
        <div className={styles.wrap}>
          <div className={styles.imageWrap}>
            <div className={styles.imagebox}>
              <Image
                src="/images/profile.png"
                alt="profile"
                width={106}
                height={106}
                className={styles.profile}
              />
              <div className={styles.editIcon}>
                <Image
                  src="/images/profileEdit.png"
                  alt="profileEdit"
                  width={16}
                  height={16}
                  className={styles.profileEdit}
                />
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <p className={styles.title}>닉네임</p>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={nickname}
                onChange={handleInputChange}
                className={styles.input}
              />
              <button
                className={`${styles.checkButton} ${isChanged ? styles.active : ''}`}
                disabled={!isChanged}
                type="button"
              >
                중복확인
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.addBox}>
            <div className={styles.formContent}>
              <h3 className={styles.title}>성별</h3>
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
              <h3 className={styles.title}>출생년도</h3>
              <div className={styles.addSelection}>
                <select
                  name="birthYear"
                  id="birthYear"
                  className={styles.yearSelect}
                  onChange={handleBirthYearChange}
                >
                  <option value="">출생년도를 선택해주세요</option>
                  {generateYearOptions()}
                </select>
              </div>
              <h3 className={styles.title}>주소</h3>
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
              <h3 className={styles.title}>취향 (최대5가지)</h3>
              <input
                className={styles.category}
                type="text"
                id="category"
                name="category"
                placeholder="선택하지 않음"
                readOnly
              />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile
