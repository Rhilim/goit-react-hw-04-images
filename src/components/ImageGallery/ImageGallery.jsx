import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImagaGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStyled>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          imgUrl={webformatURL}
          description={tags}
          largeImgUrl={largeImageURL}
        />
      ))}
    </ImageGalleryStyled>
  );
};
