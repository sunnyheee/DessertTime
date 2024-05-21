import styles from './Button.module.css'

function Button({ handleSubmit }) {
  return (
    <button onClick={handleSubmit} className={styles.btn} type="button">
      완료
    </button>
  )
}

export default Button
