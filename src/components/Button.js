import styles from '../styles/Button.module.css'

export default function Button(props) {
     const {className = 'bg-sky-500 text-white', children} = props

  return (
    <button {...props} className={`${styles.button} ${className}`}>
     {children}
    </button>
  )
}
