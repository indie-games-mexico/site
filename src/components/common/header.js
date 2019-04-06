import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { BrandLogo } from './brand-logo';
import  { MainMenu } from './main-menu-links';
import { LigthSocialMediaLinks } from './social-media-links';
import  LanguageChooser  from './language-chooser';

const StyledHeader = styled.header`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .8);;
  height: 80px;
  display:flex;
  padding: 0 10px;
`;

const BrandWrapper = styled.div`
  display:inline-block;
  width: 200px;
 text-align: center;
 padding: 10px;
`;

const BrandLogoWrapper = styled.div`
  width: 100px;
  display:inline-block;
  text-align: center;
`;

const MainMenuWrapper = styled.div`
  display: inline-block;
  flex-grow: 1;
`;

const SocialLinkWrapper = styled.div`
  display: inline-block;
`;

const LanguageChooserWrapper = styled.div`
  display: inline-block;
`;


const Header = ({ langs, i18nMessages, socialMediaLinks, menuHoverDescriptionStyle, mainMenuLinks, theme }) =>  {
    return (
      <StyledHeader>
        <BrandWrapper>
        <BrandLogoWrapper>
          <BrandLogo />
        </BrandLogoWrapper>
        </BrandWrapper>
        <MainMenuWrapper>
          <MainMenu i18nMessages={i18nMessages} mainMenuLinks={mainMenuLinks}></MainMenu>
        </MainMenuWrapper>
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
