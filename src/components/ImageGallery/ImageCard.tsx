import styles from './ImageCard.module.css';

interface Image {
  id: string;
  urls: { regular: string };
  alt_description?: string;
}

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <li className={styles.card} onClick={() => onClick(image)}>
      <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
    </li>
  );
}
