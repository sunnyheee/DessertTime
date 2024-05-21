import Image from 'next/image'
import styles from './ButtonGrid.module.css'

const items = [
  '계절메뉴',
  '과일샌드',
  '구움과자',
  '꽈베기',
  '누가',
  '달고나',
  '떡',
  '마카롱',
  '빙수',
  '빵',
  '솜사탕',
  '아이스크림',
  '양갱',
  '와플',
  '요거트',
  '전통과자',
  '젤리',
  '찐/호빵',
  '초콜릿',
  '츄러스',
  '컵케이크',
  '케이크',
  '크레페',
  '크롱지',
  '타르트',
  '탕후루',
  '파이',
  '푸딩',
]

function ButtonGrid({ selectedItems, setSelectedItems }) {
  const handleClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  return (
    <ul className={styles.tasteList}>
      {items.map((item) => (
        <li>
          <button
            key={item}
            type="button"
            className={`${styles.btn} ${selectedItems.includes(item) ? `${styles.selected}` : ''}`}
            onClick={() => handleClick(item)}
          >
            <Image
              src="images/sun-setting.svg"
              alt="아이콘"
              width={27}
              height={27}
            />
            {item}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ButtonGrid
