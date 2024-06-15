'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '../_components/common/Footer'
import Header from '../_components/common/Header'
import data from '../data/data.json'
import styles from './page.module.css'
import CategoryArrowIcon from '../_components/icon/CategoryArrowIcon'

const CategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index)
  }

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleCategoryClick(index)
    }
  }

  return (
    <>
      <Header title="카테고리" showMainLogo={false} />
      <section className="sec">
        <p className={styles.description}>후기가 궁금한 디저트를 찾아보세요</p>
        <ul className={styles.categoryList}>
          {data.categories.map((category, index) => (
            <li key={category.slug} className={styles.categoryItem}>
              <button
                type="button"
                className={styles.categoryHeader}
                onClick={() => handleCategoryClick(index)}
              >
                {category.name}
                <CategoryArrowIcon
                  stroke={
                    activeCategory === index ? 'var(--pointColor)' : '#404040'
                  }
                />
              </button>
              {activeCategory === index && (
                <ul className={styles.subcategoryList}>
                  {category.subcategories.map((subcategory) => (
                    <li
                      key={subcategory.slug}
                      className={styles.subcategoryItem}
                    >
                      <Link href={`/category/${subcategory.slug}`}>
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
      <Footer activeButton="category" />
    </>
  )
}

export default CategoryPage
