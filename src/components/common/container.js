import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding: 30px;
  text-align: center;
`;

export const Container = ({children}) => (
  <StyledContainer>
    {children}
  </StyledContainer>
)
