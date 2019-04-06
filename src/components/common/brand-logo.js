import React from 'react';
import styled from 'styled-components';
import bgblack from '../../images/indie-games-logo.svg';
import bgwhite from '../../images/indie-games-logo-white.svg';

const Img = styled.img`
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
`;

export const BrandLogo = ({ logoStyle }) => {
  const logoTypes = {
    bgblack,
    bgwhite
  }
  logoStyle = logoStyle || 'bgwhite';

  return (
    <>
      <Img src={logoTypes[logoStyle]} alt="Indie Games Mexico" />
    </>
  );
}
