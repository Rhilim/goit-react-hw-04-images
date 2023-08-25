import React, { useState } from 'react';
import Modal from 'react-modal';
import { Image, Item } from './ImageGalleryItem.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageGalleryItem = ({ imgUrl, description, largeImgUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Item>
      <Image src={imgUrl} alt={description} onClick={openModal} />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        src={largeImgUrl}
        alt={description}
      >
        <>
          <img src={largeImgUrl} alt={description} />
        </>
      </Modal>
    </Item>
  );
};
