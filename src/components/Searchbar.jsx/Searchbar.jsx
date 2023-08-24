
import React, { Component } from 'react';
import { Notify } from 'notiflix';
import { ImSearch } from 'react-icons/im';
import { SearchbarStyled, SearchForm, SearchFormBtn, SearchFormInput } from './Searchbar.styled';

export class Searchbar extends Component  {
  state = {
        searchImage: '',
      };
      handleSubmit = e => {
        const { searchImage } = this.state;
    
        e.preventDefault();
    
        if (searchImage.trim() === '') {
          return Notify.failure('Please enter text for search images', {
            timeout: 1000,
          });
        }
    
        this.props.onSubmit(searchImage);
        this.setState({ searchImage: '' });
      };
    
      handleChange = e => {
        this.setState({ searchImage: e.currentTarget.value.toLowerCase() });
      };
    
      render() {
        const { searchImage } = this.state;
    
        return (
          <SearchbarStyled>
            <SearchForm onSubmit={this.handleSubmit}>
              <SearchFormBtn type="submit">
                <ImSearch />
              </SearchFormBtn>
    
              <SearchFormInput
                type="text"
                value={searchImage}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={this.handleChange}
              ></SearchFormInput>
            </SearchForm>
          </SearchbarStyled>
        );
      }
    }




