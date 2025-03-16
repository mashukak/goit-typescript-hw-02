import Modal from 'react-modal';
import styles from './ImageModal.module.css';

interface Image {
  id: string;
  urls: { regular: string };
  alt_description?: string;
}

interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className={styles.modal}
    >
      <button className={styles.closeButton} onClick={onClose}>
        ✖
      </button>
      <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
    </Modal>
  );
}
