import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ImSearch } from 'react-icons/im';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
  const [searchImage, setSearchImage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchImage.trim() === '') {
      return toast.error('Please enter text for search images', {
        duration: 2000,
        position: 'top-center',
        style: {
          backgroundColor: 'orangered',
          color: 'white',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
    else {
      onSubmit(searchImage);
      setSearchImage('');
    }
  };

  const handleChange = (e) => 
    setSearchImage(e.currentTarget.value.toLowerCase());
  ;

  return (
    <SearchbarStyled>
      <Toaster />
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <ImSearch />
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          value={searchImage}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        ></SearchFormInput>
      </SearchForm>
    </SearchbarStyled>
  );
};
