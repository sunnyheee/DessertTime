'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './AddAdmin.module.css'
import AddAdiminTaste from './AddAdiminTaste'
import AddAdiminInfo from './AddAdiminInfo'

function AddAdimin({ cateData }) {
  const [isInfoComplete, setIsInfoComplete] = useState(false)
  const [userInfo, setUserInfo] = useState({
    gender: '',
    birthYear: '',
    address: '',
    preferences: [],
  })

  const router = useRouter()

  const handleInfoComplete = (info) => {
    setUserInfo((prev) => ({ ...prev, ...info }))
    setIsInfoComplete(true)
  }

  const handleTasteComplete = async (preferences) => {
    const finalData = { ...userInfo, preferences }
    console.log(finalData, 'finalData')
    router.push('/thanks')
  }

  const handlePrevious = () => {
    setIsInfoComplete(false)
  }

  return (
    <main className="main inner">
      <div>
        <ul className={styles.progressbar}>
          <li className={isInfoComplete ? styles.completed : ''}></li>
        </ul>
      </div>
      {!isInfoComplete ? (
        <AddAdiminInfo
          onComplete={handleInfoComplete}
          onPrevious={handlePrevious}
        />
      ) : (
        <AddAdiminTaste
          cateData={cateData}
          onComplete={handleTasteComplete}
          onPrevious={handlePrevious}
        />
      )}
    </main>
  )
}

export default AddAdimin
