'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import data from '../data/data.json'
import styles from './page.module.css'

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
      <Header title="카테고리" />
      <section className="sec">
        <p className={styles.description}>후기가 궁금한 디저트를 찾아보세요</p>
        <ul className={styles.categoryList}>
          {data.categories.map((category, index) => (
            <li key={index} className={styles.categoryItem}>
              <button
                type="button"
                className={styles.categoryHeader}
                onClick={() => handleCategoryClick(index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                tabIndex="0"
              >
                {category.name}
                <span
                  className={`${styles.arrow} ${activeCategory === index ? styles.arrowDown : ''}`}
                ></span>
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
