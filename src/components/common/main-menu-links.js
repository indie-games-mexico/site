import React, { useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UlDesktop = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    display:none;
  }
`;

const Li = styled.li`
  display: inline-block;
  line-height: 75px;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  &:visited {
    text-decoration: none;
  }
`;

const ULMobile = styled.ul`
  display: none;
  position:relative;
  padding:0;
  margin:0;
  list-style-type: none;
  line-height: 3.50em;
  @media(max-width: 800px) {
    display:inline-block;
  }
  ul {
    list-style-type: none;
    padding: 0
    margin: 0;
    text-align:left;
  }
`;

const MobileExpandButton = styled.button`
  display: block;
  color: #fff;
  padding: 10px 15px;
  display: block;
  line-height: 1em;
  line-height: 3.4em;
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

const MobileMediaLink = ({icon, link, description, langKey, i18nMessages}) => (
  <MobileLi>
    <DarkA href={link} target="blank"><i className={icon}></i> {i18nMessages[langKey]} {description}</DarkA>
  </MobileLi>
)

export const MainMenu = ({ i18nMessages, mainMenuLinks }) => {
  const [ isMenuOpen, setMenuOpen  ] = useState(false);
  const links = mainMenuLinks.map(option => <Li key={option.langKey}><A href="#">{ i18nMessages[option.langKey] }</A></Li>);
  const mobileLinks = mainMenuLinks.map((link, index) => <MobileMediaLink key={index} {...link} i18nMessages={i18nMessages}></MobileMediaLink>);
  return (
    <>
      <UlDesktop>
        {links}
      </UlDesktop>
      <ULMobile>
        <li style={{ margin: 0 }}>
          <MobileExpandButton type="button"
              onClick={() => setMenuOpen(!isMenuOpen)}>
                <i className={ isMenuOpen? 'far fa-caret-square-up' : 'far fa-caret-square-down' }></i>
          </MobileExpandButton>
        </li>
        <MobileSubMenuWrapper>
          <MobileSubMenuUl className={ isMenuOpen? 'show' : '' }>
            {mobileLinks}
          </MobileSubMenuUl>
        </MobileSubMenuWrapper>
      </ULMobile>
    </>
  )
};

MainMenu.propTypes = {
  i18nMessages: PropTypes.object,
  mainMenuLinks: PropTypes.array
}
