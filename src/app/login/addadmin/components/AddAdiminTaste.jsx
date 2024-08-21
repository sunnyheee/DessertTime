'use client'
import { useState } from 'react'
import styles from './AddAdiminTaste.module.css'
import Button from '../../../_components/common/Button'
// category icon
import WinterDessertIcon from '../../../_components/icon/category/WinterDessertIcon'
import BakedGoodsIcon from '../../../_components/icon/category/BakedGoodsIcon'
import DonutIcon from '../../../_components/icon/category/DonutIcon'
import RiceCakeIcon from '../../../_components/icon/category/RiceCakeIcon'
import MacaroonIcon from '../../../_components/icon/category/MacaroonIcon'
import BreadIcon from '../../../_components/icon/category/BreadIcon'
import FruitDessertIcon from '../../../_components/icon/category/FruitDessertIcon'
import SummerDessertIcon from '../../../_components/icon/category/SummerDessertIcon'
import YogurtIcon from '../../../_components/icon/category/YogurtIcon'
import TraditionalDessertIcon from '../../../_components/icon/category/TraditionalDessertIcon'
import ChocolateIcon from '../../../_components/icon/category/ChocolateIcon'
import CakeIcon from '../../../_components/icon/category/CakeIcon'
import CookieIcon from '../../../_components/icon/category/CookieIcon'
import TartPieIcon from '../../../_components/icon/category/TartPieIcon'
import PancakeIcon from '../../../_components/icon/category/PancakeIcon'
import PastryIcon from '../../../_components/icon/category/PastryIcon'
import PuddingJellyIcon from '../../../_components/icon/category/PuddingJellyIcon'
import StreetDessertIcon from '../../../_components/icon/category/StreetDessertIcon'
import InternationalDessertIcon from '../../../_components/icon/category/InternationalDessertIcon'
import ExoticDessertIcon from '../../../_components/icon/category/ExoticDessertIcon'

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

function AddAdiminTaste({ onComplete, cateData, onPrevious }) {
  const [preferences, setPreferences] = useState([])

  const togglePreference = (preference) => {
    setPreferences((prev) =>
      prev.includes(preference)
        ? prev.filter((p) => p !== preference)
        : [...prev, preference].slice(0, 5),
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onComplete(preferences)
  }

  const isFormComplete = preferences.length >= 5

  const getSvgStyle = (dessertName) => {
    return {
      filter: preferences.includes(dessertName) ? 'none' : 'grayscale(100%)',
      WebkitFilter: preferences.includes(dessertName)
        ? 'none'
        : 'grayscale(100%)',
      fill: preferences.includes(dessertName) ? '#EF4444' : '#bcbcbc',
    }
  }

  return (
    <>
      <h2 className={styles.title}>취향 선택</h2>
      <p className={styles.subdes}>최대 5가지를 선택해주세요 (선택)</p>
      <form className={styles.formContent} onSubmit={handleSubmit}>
        <section className={styles.addBox}>
          <ul className={styles.tasteList}>
            {cateData?.length > 0 ? (
              cateData.map((item) => {
                const SvgIcon = categoryComponents[item.dessertCategoryId]

                return (
                  <li key={item.dessertCategoryId}>
                    <button
                      type="button"
                      onClick={() => togglePreference(item.dessertName)}
                      className={`${styles.button} ${
                        preferences.includes(item.dessertName)
                          ? styles.selected
                          : ''
                      }`}
                    >
                      {SvgIcon ? (
                        <>
                          <SvgIcon
                            width={40}
                            height={40}
                            style={getSvgStyle(item.dessertName)}
                          />
                          <span
                            className={
                              preferences.includes(item.dessertName)
                                ? styles.selectedText
                                : styles.defaultText
                            }
                          >
                            {item.dessertName}
                          </span>
                        </>
                      ) : (
                        <span
                          className={
                            preferences.includes(item.dessertName)
                              ? styles.selectedText
                              : styles.defaultText
                          }
                        >
                          {item.dessertName}
                        </span>
                      )}
                    </button>
                  </li>
                )
              })
            ) : (
              <li className={styles.noData}>데이터를 찾지 못했습니다</li>
            )}
          </ul>
          <div className={styles.buttonContainer}>
            <Button text="이전" className={styles.prev} onClick={onPrevious} />
            <Button
              text={isFormComplete ? '완료' : '다음'}
              type="submit"
              className={
                isFormComplete
                  ? `${styles.buttonComplete} ${styles.next}`
                  : `${styles.next}`
              }
            />
          </div>
        </section>
      </form>
    </>
  )
}

export default AddAdiminTaste
