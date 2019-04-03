import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding: 30px;
  text-align: center;
  transition: padding 1s ease-in;
  @media (max-width: 800px) {
    padding:0;
  }
`;

export const Container = ({children}) => (
  <StyledContainer>
    {children}
  </StyledContainer>
)
