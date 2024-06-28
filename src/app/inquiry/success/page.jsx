'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './success.module.css'

export default function InquirySuccess() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (countdown === 0) {
      router.push('/')
    }

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown, router])

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="main">
      <section className="inner">
        <article className={styles.box}>
          <div className={styles.logoBox}>
            <Image
             className={styles.logo}
              src="/images/logo.svg"
              width={171}
              height={64}
              alt="Dessert Time"
             
            />
          
            <h3 className={styles.title}>
             문의가 접수 되었습니다
            </h3>
          </div>
          <div className={styles.textBox}>
            <p className={styles.text}>
              {countdown}초 후 메인화면으로 이동합니다.
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}


