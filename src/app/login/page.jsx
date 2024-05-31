import Image from 'next/image'
import styles from './page.module.css'
import AddAdimin from './components/AddAdimin'

import { fetchCategories } from '../api/route'

const Loginpage = async () => {
  const data = await fetchCategories()
  return (
    <main className={`main ${styles.main}`}>
      <AddAdimin data={data} />
      <div className={styles.container}>
        <Image
          src="/images/logo.png"
          alt="로고"
          width={171}
          height={64}
          className={styles.logo}
        />

        <div className={styles.linecontainer}>
          <div className={styles.line}></div>
          <div className={styles.text}>로그인/회원가입</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.imageButton}>
            <img
              src="/images/kakao.png"
              alt="kakao"
              className={styles.buttonImage}
            />
          </button>
          <button type="button" className={styles.imageButton}>
            <img
              src="/images/naver.png"
              alt="naver"
              className={styles.buttonImage}
            />
          </button>
          <button type="button" className={styles.imageButton}>
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
        <a href="/login/inquiry" className={styles.txt}>
          <p className={styles.txt}>문의하기</p>
        </a>
      </div>
    </main>
  )
}
export default Loginpage
