import styles from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return <p className={styles.errorMessage}>Щось пішло не так! Спробуйте ще раз.</p>;
}
