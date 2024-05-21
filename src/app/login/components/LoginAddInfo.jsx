'use client'

import { useState } from 'react'
import styles from './LoginAddInfo.module.css'
import ButtonGrid from './AddInfoBox/ButtonGrid'
import GenderGrid from './AddInfoBox/GenderGrid'
import Button from '../../components/Button'

function LoginAddInfo() {
  const [selectedItems, setSelectedItems] = useState([])
  const handleSubmit = () => {
    //
  }

  return (
    <article className={styles.infoArticle}>
      <form>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>추가 정보 입력(선택)</h2>
          <h3 className={styles.subtitle}>
            추가 정보를 입력하면
            <br />
            추천 후기를 알 수 있습니다.
          </h3>

          <p className={styles.categoryTitle}>성별</p>
          <GenderGrid
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />

          <div>
            <p className={styles.categoryTitle}>출생년도</p>
            <select>
              <option value="1992">1992</option>
              <option value="1992">1992</option>
            </select>
          </div>
          <div>
            <p className={styles.categoryTitle}>주소</p>
            <input type="text" />
          </div>
          <div>
            <p className={styles.categoryTitle}>
              취향<span className={styles.thinText}>(최대5가지)</span>
            </p>
            <ButtonGrid
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </div>
        </div>
        <Button handleSubmit={handleSubmit} />
      </form>
    </article>
  )
}

export default LoginAddInfo
