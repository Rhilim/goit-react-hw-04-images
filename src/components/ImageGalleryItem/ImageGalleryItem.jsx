import React, { Component } from 'react';
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

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { imgUrl, description, largeImgUrl } = this.props;

    return (
      <Item>
        <Image src={imgUrl} alt={description} onClick={this.openModal} />

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
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
  }
}
