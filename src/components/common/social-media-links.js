// This file may be deprecated 

import React, { useState } from 'react';

// import PropTypes from 'PropTypes';
import styled from 'styled-components';



const UlDesktop = styled.ul`
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
`;

const LightA = styled.a`
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

const LinkDescription = styled.span`
    display: none;
    position: absolute;
    color: inherit;
    border-radius: 5px;
    padding: 10px;
    left: -30px;
    width: max-content;
    z-index: 100;
    bottom: -35px;
    font-size: 1em;
    min-width: 200px;
    text-align: center;
    &.light {
      background-color: rgba(255, 255, 255, 0.4);
      color: #f0f8ff;
      transition: all .5s ease-in;
    }
    &.dark {
      background-color: rgba(0,0,0,.8);
      color: #f0f8ff;
      bottom: -36px;
    }
`;

const MediaLink = ({icon, link, description, langKey, i18nMessages, themeHoveStyle}) => {
  return (
    <Li>
      <LightA href={link} target="_blank"><i className={icon}></i>
        <LinkDescription className={themeHoveStyle}>{i18nMessages[langKey]} {description}</LinkDescription>
      </LightA>
    </Li>
  )
}

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

const MobileMediaLink = ({icon, link, description, langKey, i18nMessages}) => (
  <MobileLi>
    <DarkA href={link} target="blank"><i className={icon}></i> {i18nMessages[langKey]} {description}</DarkA>
  </MobileLi>
)



export const LigthSocialMediaLinks = ({ socialMediaLinks, i18nMessages, menuHoverDescriptionStyle, themeHoveStyle }) => {

  const [ isMenuOpen, setMenuOpen  ] = useState(false);
  const desktopLinks = socialMediaLinks.map((link, index) => <MediaLink key={index} {...link} i18nMessages={i18nMessages} themeHoveStyle={themeHoveStyle}></MediaLink>);
  const mobileLinks = socialMediaLinks.map((link, index) => <MobileMediaLink key={index} {...link} i18nMessages={i18nMessages}></MobileMediaLink>);
  return (
    <>
      <UlDesktop data-attr={menuHoverDescriptionStyle}>
        {desktopLinks}
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

}



//TODO: create PropTypes
