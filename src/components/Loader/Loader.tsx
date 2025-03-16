import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines strokeColor="blue" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
    </div>
  );
}
