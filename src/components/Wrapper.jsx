import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = ({ children }) => {
  return (
    <WrapperStyled>
      <main>{children}</main>
    </WrapperStyled>
  );
};
