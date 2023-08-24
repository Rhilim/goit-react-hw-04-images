import { LoadMoreBtnStyled } from './LoadMoreBtn.styled';

export const Button = ({ onClick }) => {
  return (
    <>
      <LoadMoreBtnStyled onClick={onClick}>Load more</LoadMoreBtnStyled>
    </>
  );
};
