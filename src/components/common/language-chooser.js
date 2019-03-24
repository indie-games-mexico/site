// https://github.com/angeloocana/gatsby-plugin-i18n/blob/master/packages/gatsby-starter-default-i18n/src/components/SelectLanguage.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import  styled  from 'styled-components';

const DesktopLanguageSelector = styled.ul`
    position:relative;
    padding:0;
    margin:0;
    list-style-type: none;
    line-height: 3.50em;
    @media (max-width: 800px) {
      display:none;
    }
`;

const Li = styled.li`
  display: inline-block;
  line-height: 1em;
  a {
    cursor: pointer;
  }
`;

const LanguageButton = styled.a`
    user-select: none;
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    display: block;
    line-height: 1em;
    &:visited {
      color: white;
    }
    &:hover {
      background-color: rgba(200, 200, 200, 0.4);
      border-radius: 5px;
      span {
        display: block;
      }
    }
`;

const SubMenu = styled.ul`
  width: 170px;
  display: none;
  padding: 0;
  margin: 0;
  position:absolute;
  background-color: white;
  border-radius: 5px;
`;

const SubMenuItem = styled.li`
  list-style-type: none;
  padding: 5px;
  color: black;
  margin-bottom: 0;
`;

const LanguageLink = styled.a`
  display: block;
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  &:visited {
    color: black;
  }
  &:hover {
    background-color: #f0f8ff;
    animate:all 1s;
    box-shadow: 1px 1px 14px 0px rgba(51, 160, 255, 0.6);
  }
`;

const SyledI = styled.i`
  font-size: .8em;
`;

const MobileLanguageSelector = styled.ul`
  display: none;
  position: relative;
  padding: 0;
  margin: 0;
  list-style-type: none;
  line-height: 3.5em;
  @media(max-width: 800px) {
    display: inline-block;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

const MobileExpandButton = styled.button`
  display: block;
  color: #fff;
  padding: 10px 15px;
  display: block;
  line-height: 1em;
  line-height: 2.3em;
  background-color: transparent;
  border:none;
`
const MobileLi = styled.li`
  margin-bottom:0;
  border-bottom: solid 1px #ccc;
  padding-left: 30px;
  overflow: hidden;
`;

const MobileSubMenuWrapper = styled.li`
  margin: 0;
  ul {
    width: 0px;
    height: 0px;
    overflow: hidden;
    transition:all .4s cubic-bezier(0.03, 1.14, 0.99, 1.07);
    color: transparent;
    opacity:0;
  }

  ul.show {
    width: 100%;
    height: auto;
    opacity: .95;
  }
`;

const MobileSubMenuUl = styled.ul`
  background-color: #fff;
  position: fixed;
  left: 0;
`;

const DarkA = styled.a`
  color: #000;
  display: block;
  text-decoration: none;
  &:visited {

  }
`;

const MobileMediaLink = ({icon, link, description, langKey}) => (
  <MobileLi>
    <DarkA href={link} target="blank"><i className={icon}></i> {description}</DarkA>
  </MobileLi>
)






const LanguageChooser = ({ langs, intl }) => {
  const linkTitle = intl.formatMessage({id: 'language'});
  const currentLocale = intl.formatMessage({id: 'locale'});
  const linkData = langs
                   .map(lang => Object.assign({}, lang, { link: `/${lang.langKey.locale}/`, active: currentLocale === lang.langKey.locale }));
  const links =  linkData
                .map(lang =>
                    <SubMenuItem key={lang.langKey.locale } active={lang.active}>
                      <LanguageLink href={lang.link}>{lang.langKey.name}</LanguageLink>
                    </SubMenuItem>);
  const mobileLinks = linkData
                      .map(lang => (
                        <MobileMediaLink key={lang.langKey.locale} link={lang.link} description={lang.langKey.name}></MobileMediaLink>
                      ))

  let [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <DesktopLanguageSelector>
      <Li>
        <LanguageButton onClick={()=> { setMenuOpen(!isMenuOpen); }}>
            <i className="fas fa-globe"></i> {linkTitle} <SyledI className={isMenuOpen === false? 'fas fa-plus' : 'fas fa-minus' }></SyledI>
        </LanguageButton>
        <SubMenu style={{
            display: isMenuOpen? 'block' : 'none'
         }}>
          {links}
        </SubMenu>
      </Li>
    </DesktopLanguageSelector>
    <MobileLanguageSelector>
    <li style={{ margin: 0 }}>
      <MobileExpandButton type="button"
          onClick={() => setMenuOpen(!isMenuOpen)}>
            <i className={ isMenuOpen? 'fas fa-globe fa-spin' : 'fas fa-globe' }></i>
      </MobileExpandButton>
    </li>
    <MobileSubMenuWrapper>
      <MobileSubMenuUl className={ isMenuOpen? 'show' : '' }>
        {mobileLinks}
      </MobileSubMenuUl>
    </MobileSubMenuWrapper>
    </MobileLanguageSelector>
    </>
  );
};

LanguageChooser.propTypes = {
  langs: PropTypes.array
};

export default injectIntl(LanguageChooser);
