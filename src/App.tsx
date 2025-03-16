import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

const ACCESS_KEY = 'GlRD_78IaWz48GGRYrgjbmt22pO5QsejczE_wEQ4Cnc';

interface Image {
  id: string;
  urls: { regular: string };
  alt_description?: string;
}

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleSearchSubmit = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<{ results: Image[] }>(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${ACCESS_KEY}`
        );
        
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError('Помилка при завантаженні зображень');
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {isModalOpen && selectedImage && (
        <ImageModal image={selectedImage} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}
