import ImageCard from '../ImageGallery/ImageCard';
import styles from './ImageGallery.module.css';

interface Image {
  id: string;
  urls: { regular: string };
  alt_description?: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export default function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
}
