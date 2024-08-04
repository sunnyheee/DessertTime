'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './AddAdiminTaste.module.css'
import Button from '../../../_components/common/Button'

function AddAdiminTaste({ onComplete, cateData, onPrevious }) {
  const [preferences, setPreferences] = useState([])

  const togglePreference = (preference) => {
    setPreferences((prev) =>
      prev.includes(preference)
        ? prev.filter((p) => p !== preference)
        : [...prev, preference].slice(0, 6),
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onComplete(preferences)
  }

  const isFormComplete = preferences.length >= 6

  const getSvgStyle = (dessertName) => {
    return {
      filter: preferences.includes(dessertName) ? 'none' : 'grayscale(100%)',
      WebkitFilter: preferences.includes(dessertName)
        ? 'none'
        : 'grayscale(100%)',
      fill: preferences.includes(dessertName) ? '#EF4444' : '#bcbcbc',
    }
  }

  return (
    <>
      <h2 className={styles.title}>취향 선택</h2>
      <p className={styles.subdes}>최대 5가지를 선택해주세요 (선택)</p>
      <form className={styles.formContent} onSubmit={handleSubmit}>
        <section className={styles.addBox}>
          <ul className={styles.tasteList}>
            {cateData?.length > 0 ? (
              cateData.map((item) => (
                <li key={item.dessertCategoryId}>
                  <button
                    type="button"
                    onClick={() => togglePreference(item.dessertName)}
                    className={`${styles.button} ${preferences.includes(item.dessertName) ? styles.selected : ''}`}
                  >
                    <Image
                      src="/"
                      alt={item.dessertName}
                      width={40}
                      height={40}
                    />
                    {item.dessertName}
                  </button>
                </li>
              ))
            ) : (
              <li className={styles.noData}>데이터를 찾지 못했습니다</li>
            )}
          </ul>
          <div className={styles.buttonContainer}>
            <Button text="이전" className={styles.prev} onClick={onPrevious} />
            <Button
              text={isFormComplete ? '완료' : '다음'}
              type="submit"
              className={
                isFormComplete
                  ? `${styles.buttonComplete} ${styles.next}`
                  : `${styles.next}`
              }
            />
          </div>
        </section>
      </form>
    </>
  )
}

export default AddAdiminTaste
