'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/login')
  }

  return (
    <main className="main">
      <section className="inner">
        {/* 임시 */}
        <button type="button" onClick={handleClick} className={styles.button}>
          로그인
        </button>
      </section>
    </main>
  )
}
