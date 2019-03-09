import PropTypes from "prop-types"
import React from "react"
import SelectLanguage from './SelectLanguage';
import styled from 'styled-components';
import { LigthSocialMediaLinks } from './social-media-links';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .8);;
  height: 60px;
  display:flex;
  justify-content:space-between;
  padding: 0 10px;
`;

const BrandWrapper = styled.div`
  display:inline-block;
  text-align:center;
`;

const BrandTitle = styled.h1`
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    color: #f0f8ff;
    font-weight: 100;
    font-style: inherit;
    font-variant: small-caps;
    font-size: 2.25em;
    line-height: 1.5em;
`;

const SocialLinkWrapper = styled.div`
  display: inline-block;
`;


const Header = ({ i18nMessages, socialMediaLinks }) => (
  <StyledHeader>
    <BrandWrapper>
      <BrandTitle>{i18nMessages.title}</BrandTitle>
    </BrandWrapper>
    <SocialLinkWrapper>
      <LigthSocialMediaLinks socialMediaLinks={socialMediaLinks}></LigthSocialMediaLinks>
    </SocialLinkWrapper>
  </StyledHeader>
);


Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
