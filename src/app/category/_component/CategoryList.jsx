'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './CategoryList.module.css'
import CategoryArrowIcon from '../../_components/icon/CategoryArrowIcon'

// category icon
import WinterDessertIcon from '../../_components/icon/category/WinterDessertIcon'
import BakedGoodsIcon from '../../_components/icon/category/BakedGoodsIcon'
import DonutIcon from '../../_components/icon/category/DonutIcon'
import RiceCakeIcon from '../../_components/icon/category/RiceCakeIcon'
import MacaroonIcon from '../../_components/icon/category/MacaroonIcon'
import BreadIcon from '../../_components/icon/category/BreadIcon'
import FruitDessertIcon from '../../_components/icon/category/FruitDessertIcon'
import SummerDessertIcon from '../../_components/icon/category/SummerDessertIcon'
import YogurtIcon from '../../_components/icon/category/YogurtIcon'
import TraditionalDessertIcon from '../../_components/icon/category/TraditionalDessertIcon'
import ChocolateIcon from '../../_components/icon/category/ChocolateIcon'
import CakeIcon from '../../_components/icon/category/CakeIcon'
import CookieIcon from '../../_components/icon/category/CookieIcon'
import TartPieIcon from '../../_components/icon/category/TartPieIcon'
import PancakeIcon from '../../_components/icon/category/PancakeIcon'
import PastryIcon from '../../_components/icon/category/PastryIcon'
import PuddingJellyIcon from '../../_components/icon/category/PuddingJellyIcon'
import StreetDessertIcon from '../../_components/icon/category/StreetDessertIcon'
import InternationalDessertIcon from '../../_components/icon/category/InternationalDessertIcon'
import ExoticDessertIcon from '../../_components/icon/category/ExoticDessertIcon'

const categoryComponents = {
  1: WinterDessertIcon,
  2: BakedGoodsIcon,
  3: DonutIcon,
  4: RiceCakeIcon,
  5: MacaroonIcon,
  6: BreadIcon,
  7: FruitDessertIcon,
  8: SummerDessertIcon,
  9: YogurtIcon,
  10: TraditionalDessertIcon,
  11: ChocolateIcon,
  12: CakeIcon,
  13: CookieIcon,
  14: TartPieIcon,
  15: PancakeIcon,
  16: PastryIcon,
  17: PuddingJellyIcon,
  18: StreetDessertIcon,
  19: InternationalDessertIcon,
  20: ExoticDessertIcon,
}

const CategoryList = ({ cateData }) => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [preferences, setPreferences] = useState([])

  const handleCategoryClick = (index, dessertName) => {
    setActiveCategory(activeCategory === index ? null : index)

    setPreferences((prev) =>
      prev.includes(dessertName)
        ? prev.filter((p) => p !== dessertName)
        : [...prev, dessertName],
    )
  }

  const getSvgStyle = (dessertName) => {
    return {
      filter: preferences.includes(dessertName) ? 'none' : 'grayscale(100%)',
      fill: preferences.includes(dessertName) ? '#EF4444' : '#bcbcbc',
    }
  }

  return (
    <ul className={styles.categoryList}>
      {cateData.map((category, index) => {
        const IconComponent = categoryComponents[category.dessertCategoryId]
        return (
          <li key={category.slug} className={styles.categoryItem}>
            <button
              type="button"
              className={styles.categoryHeader}
              onClick={() => handleCategoryClick(index, category.dessertName)}
            >
              <div className={styles.titlebox}>
                {IconComponent && (
                  <IconComponent
                    width={20}
                    height={20}
                    style={getSvgStyle(category.dessertName)}
                  />
                )}
                {category.dessertName}
              </div>
              <CategoryArrowIcon
                stroke={
                  activeCategory === index ? 'var(--pointColor)' : '#404040'
                }
              />
            </button>
            {activeCategory === index && (
              <ul className={styles.subcategoryList}>
                {category.secondCategory.map((subcategory) => (
                  <li
                    key={subcategory.dessertCategoryId}
                    className={styles.subcategoryItem}
                  >
                    <Link href={`/category/${subcategory.dessertCategoryId}`}>
                      {subcategory.dessertName}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default CategoryList
