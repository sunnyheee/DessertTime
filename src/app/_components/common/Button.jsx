import styles from './Button.module.css'

function Button({ onClick, text, className }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${className}`}
      type="button"
    >
      {text}
    </button>
  )
}

export default Button
