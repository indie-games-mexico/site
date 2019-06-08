import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { BrandLogo } from './brand-logo';
import  { MainMenu } from './main-menu-links';
import  LanguageChooser  from './language-chooser';

const StyledHeader = styled.header`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .8);
  height: 80px;
  display:flex;
  padding: 0 10px;
`;

const BrandWrapper = styled.div`
  display:inline-block;
  width: 200px;
  text-align: center;
  padding: 10px;
  @media(max-width: 800px) {
    width: unset;
    padding: 15px 0 0 0;
  }
`;

const BrandLogoWrapper = styled.div`
  width: 100px;
  display:inline-block;
  text-align: center;
  @media(max-width: 800px) {
    width: 80px;
    padding: 8px 0 0 0;
  }
`;

const MainMenuWrapper = styled.div`
  display: inline-block;
  flex-grow: 1;
  @media (max-width: 800px) {
    text-align: right;
  }
`;

const LanguageChooserWrapper = styled.div`
  display: inline-block;
`;


const Header = ({ langs, i18nMessages, homeLink, socialMediaLinks, menuHoverDescriptionStyle, mainMenuLinks, theme }) =>  {
    return (
      <StyledHeader>
        <BrandWrapper>
        <BrandLogoWrapper>
          <a href={`${homeLink}`}>
            <BrandLogo />
          </a>
        </BrandLogoWrapper>
        </BrandWrapper>
        <MainMenuWrapper>
          <MainMenu i18nMessages={i18nMessages} mainMenuLinks={mainMenuLinks}></MainMenu>
        </MainMenuWrapper>
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
