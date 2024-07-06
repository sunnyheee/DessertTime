'use client'
import Image from 'next/image'
import styles from './page.module.css'
import KaKaohandleLogin from './social/kakaoLogin'
import NaverhandleLogin from './social/naverLogin'
import GooglehandleLogin from './social/googleLogin'

const Loginpage = () => {
  return (
    <main className={`main ${styles.main}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="로고" width={171} height={64} />
        </a>

        <div className={styles.buttonContainer}>
          <div className={styles.linecontainer}>
            <div className={styles.line}></div>
            <div className={styles.text}>로그인/회원가입</div>
            <div className={styles.line}></div>
          </div>
          <button
            type="button"
            className={styles.imageButton}
            onClick={KaKaohandleLogin}
          >
            <img
              src="/images/kakao.png"
              alt="kakao"
              className={styles.buttonImage}
            />
          </button>
          <button
            type="button"
            className={styles.imageButton}
            onClick={NaverhandleLogin}
          >
            <img
              src="/images/naver.png"
              alt="naver"
              className={styles.buttonImage}
            />
          </button>
          <button
            type="button"
            className={styles.imageButton}
            onClick={GooglehandleLogin}
          >
            <img
              src="/images/google.png"
              alt="google"
              className={styles.buttonImage}
            />
          </button>
          <button
            type="button"
            className={`${styles.imageButton} ${styles.appleButton}`}
          >
            <img
              src="/images/apple.png"
              alt="apple"
              className={styles.buttonImage}
            />
          </button>
        </div>
        <a href="/inquiry" className={styles.txt}>
          <p className={styles.txt}>문의하기</p>
        </a>
      </div>
    </main>
  )
}
export default Loginpage
