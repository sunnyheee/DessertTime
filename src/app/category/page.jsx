import Footer from '../_components/common/Footer'
import Header from '../_components/common/Header'
import styles from './page.module.css'
import { getDummyData } from '../api/route'
import CategoryList from './_component/CategoryList'

const CategoryPage = async () => {
  const dummyData = await getDummyData()

  return (
    <>
      <Header title="카테고리" showMainLogo={false} />
      <section className="sec">
        <div className={styles.content}>
          <p className={styles.description}>
            후기가 궁금한 디저트를 찾아보세요
          </p>
          <CategoryList categories={dummyData.categories} />
        </div>
      </section>
      <Footer activeButton="category" />
    </>
  )
}

export default CategoryPage
