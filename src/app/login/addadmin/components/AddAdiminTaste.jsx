'use client'
import { useState } from 'react'
import styles from './AddAdiminTaste.module.css'
import Button from '../../../components/common/Button'

function AddAdiminTaste({ onComplete, cateData, onPrevious }) {
  const [preferences, setPreferences] = useState([])

  const togglePreference = (preference) => {
    setPreferences((prev) =>
      prev.includes(preference)
        ? prev.filter((p) => p !== preference)
        : [...prev, preference].slice(0, 5),
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onComplete(preferences)
  }

  const isFormComplete = preferences.length >= 5

  return (
    <>
      <h2 className={styles.title}>취향 선택</h2>
      <p className={styles.subdes}>최대 5가지를 선택해주세요 (선택)</p>
      <form className={styles.formContent} onSubmit={handleSubmit}>
        <section className={styles.addBox}>
          <ul className={styles.tasteList}>
            {cateData.length > 0 ? (
              cateData.map((item) => (
                <li key={item.prd_id}>
                  <button
                    type="button"
                    onClick={() => togglePreference(item.prd_name)}
                    className={`${styles.button} ${preferences.includes(item.prd_name) ? styles.selected : ''}`}
                  >
                    <img src={item.prd_img} alt={item.prd_name} />
                    {item.prd_name}
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
              onClick={handleSubmit}
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
