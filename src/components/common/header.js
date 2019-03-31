import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { LigthSocialMediaLinks } from './social-media-links';
import  LanguageChooser  from './language-chooser';

const StyledHeader = styled.header`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .8);;
  height: 60px;
  display:flex;
  padding: 0 10px;
`;

const BrandWrapper = styled.div`
  display:inline-block;
  flex-grow: 1;
`;

const BrandTitle = styled.h1`
    font-family: inherit;
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

const LanguageChooserWrapper = styled.div`
  display: inline-block;
`;


const Header = ({ langs, i18nMessages, socialMediaLinks, menuHoverDescriptionStyle, theme }) =>  {
    return (
      <StyledHeader>
        <BrandWrapper>
          <BrandTitle>{i18nMessages.title}</BrandTitle>
        </BrandWrapper>
        <SocialLinkWrapper>
          <LigthSocialMediaLinks
                i18nMessages={i18nMessages}
                socialMediaLinks={socialMediaLinks}
                menuHoverDescriptionStyle={menuHoverDescriptionStyle}
                themeHoveStyle={theme.mainMenuStyles}></LigthSocialMediaLinks>
        </SocialLinkWrapper>
        <LanguageChooserWrapper>
          <LanguageChooser langs={langs} intl={i18nMessages}></LanguageChooser>
        </LanguageChooserWrapper>
      </StyledHeader>
    );
};

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
