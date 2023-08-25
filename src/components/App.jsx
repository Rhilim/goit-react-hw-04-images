import { getImages } from './api';
import toast, { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './LoadMoreBtn/LoadMoreBtn';
import { Searchbar } from './Searchbar.jsx/Searchbar';
import { Loader } from './Loader/Loader';
import { Wrapper } from './Wrapper';
import { useEffect, useState } from 'react';


export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    fetchImages();
  }, [query, page]);

  async function fetchImages() {
    if (query === '') return;
    const options = { query, page };

    try {
      setIsLoading(true);

      const { hits, totalHits } = await getImages(options);

      const nextImages = hits.map(({ id, webformatURL, tags, largeImageURL }) => ({
        id,
        webformatURL,
        tags,
        largeImageURL,
      }));

      if (page === 1) {
        if (!nextImages.length) {
          toast.error(`There is no result for ${query}`);
          return;
        }

        setImages(nextImages);
        setTotalImages(totalHits);
      } else {
        setImages(prevImages => [...prevImages, ...nextImages]);
      }

      checkLastPage(totalHits);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(value) {
    setImages([]);
    setQuery(value);
    setPage(1);
    setTotalImages(0);
  }

  function handleLoadMore() {
    setPage(prevPage => prevPage + 1);
  }

  function checkLastPage(totalImages) {
    const lastPage = Math.ceil(totalImages / 12);

    if (page === lastPage) {
      toast.success(`You have got all images for request ${query}`);
    }
  }

  const loadMoreVisible = !isLoading && images.length !== 0 && images.length < totalImages;

  return (
    <>
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      <Toaster />
      <ImageGallery images={images}></ImageGallery>
      <Wrapper>
        {loadMoreVisible && <Button onClick={handleLoadMore} />}
        {isLoading && <Loader />}
      </Wrapper>
    </>
  );
}