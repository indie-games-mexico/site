import React from 'react';
import styled from 'styled-components';

export const H2 = styled.h2`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
`;

export const A = styled.a`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
`;

export const P = styled.p`
  font-family: 'Rajdhani', sans-serif;
`;

export const JustifiedP = ({ children }) => (
  <P style={{ textAlign: 'justify' }}>
    { children }
  </P>
)
