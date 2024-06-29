'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './CategoryList.module.css'
import CategoryArrowIcon from '../../_components/icon/CategoryArrowIcon'

const CategoryList = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null)

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index)
  }

  return (
    <ul className={styles.categoryList}>
      {categories.map((category, index) => (
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
                <li key={subcategory.slug} className={styles.subcategoryItem}>
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
  )
}

export default CategoryList
