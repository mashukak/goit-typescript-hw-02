import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function LoadMoreBtn({ onClick, disabled = false }: LoadMoreBtnProps) {
  return (
    <button className={styles.loadMore} onClick={onClick} disabled={disabled}>
      Load More
    </button>
  );
}
