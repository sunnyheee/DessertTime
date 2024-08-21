import Footer from '../_components/common/Footer'
import Header from '../_components/common/Header'
import styles from './page.module.css'
import CategoryList from './_component/CategoryList'
import fetchCategories from '../api/category'

const CategoryPage = async () => {
  const cateData = await fetchCategories()
  console.log('Fetched Categories Data:', cateData)

  return (
    <>
      <Header title="카테고리" showMainLogo={false} />
      <section className="sec">
        <div className={styles.content}>
          <p className={styles.description}>
            후기가 궁금한 디저트를 찾아보세요
          </p>
          <CategoryList cateData={cateData} />
        </div>
      </section>
      <Footer activeButton="category" />
    </>
  )
}

export default CategoryPage
