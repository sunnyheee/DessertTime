import styles from './GenderGrid.module.css'

const items = ['남성', '여성']

function GenderGrid({ selectedItems, setSelectedItems }) {
  const handleClick = (item) => {
    if (selectedItems === item) {
      setSelectedItems('')
    } else {
      setSelectedItems(item)
    }
  }

  return (
    <ul className={styles.genderList}>
      {items.map((item) => (
        <li>
          <button
            key={item}
            type="button"
            className={`${styles.btn} ${selectedItems.includes(item) ? `${styles.selected}` : ''}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default GenderGrid
