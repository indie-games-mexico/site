import React from 'react';
import styled from 'styled-components';

const StyledPanel = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;


export const Panel = ({children}) => {

  return (
    <StyledPanel>
      {children}
    </StyledPanel>
  )
}
