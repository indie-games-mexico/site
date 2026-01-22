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
    padding: 0;
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

/* const MobileMediaLink = ({ link, title }) => {
  // console.log({icon, link, description, langKey, title})
  return (
    <MobileLi>
      <DarkA href={link} target="blank"> {title}</DarkA>
    </MobileLi>
  )
}
export const MainMenu = ({ i18nMessages, mainMenuLinks }) => {
  const [ isMenuOpen, setMenuOpen  ] = useState(false);
  const links = mainMenuLinks.map(option => <Li key={option.langKey}><A href={ i18nMessages[option.link] }>{ i18nMessages[option.langKey] }</A></Li>);
  const mobileLinks = mainMenuLinks.map(option => <MobileMediaLink key={option.langKey} link={i18nMessages[option.link]}  title={i18nMessages[option.langKey]}></MobileMediaLink>);
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
}*/

const MobileMediaLink = ({ link, title }) => {
  return (
    <MobileLi>
      <DarkA href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </DarkA>
    </MobileLi>
  );
};

export const MainMenu = ({ i18nMessages, mainMenuLinks }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  /* ======================
     DESKTOP LINKS
  ====================== */
  const links = mainMenuLinks.map(option => {
    // SIN hijos
    if (!option.children) {
      return (
        <Li key={option.langKey}>
          <A href={i18nMessages[option.link]}>
            {i18nMessages[option.langKey]}
          </A>
        </Li>
      );
    }

    // CON hijos (Games)
    return (
      <Li key={option.langKey} style={{ position: 'relative' }}>
        <A href={i18nMessages[option.link]}>
          {i18nMessages[option.langKey]}
        </A>

        <ul
          style={{
            position: 'absolute',
            top: '75px',
            left: 0,
            background: '#000',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            minWidth: '220px',
            display: 'none'
          }}
          className="submenu"
        >
          {option.children.map(child => (
            <li key={child.langKey} style={{ lineHeight: '50px', padding: '0 20px' }}>
              <A
                href={i18nMessages[child.link]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18nMessages[child.langKey]}
              </A>
            </li>
          ))}
        </ul>
      </Li>
    );
  });

  /* ======================
     MOBILE LINKS
  ====================== */
  const mobileLinks = mainMenuLinks.map(option => {
    // SIN hijos
    if (!option.children) {
      return (
        <MobileMediaLink
          key={option.langKey}
          link={i18nMessages[option.link]}
          title={i18nMessages[option.langKey]}
        />
      );
    }

    // CON hijos (Games)
    return (
      <MobileSubMenuWrapper key={option.langKey}>
        <MobileLi>
          <DarkA href={i18nMessages[option.link]}>
            {i18nMessages[option.langKey]}
          </DarkA>
        </MobileLi>

        <ul className={isMenuOpen ? 'show' : ''}>
          {option.children.map(child => (
            <MobileLi key={child.langKey}>
              <DarkA
                href={i18nMessages[child.link]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18nMessages[child.langKey]}
              </DarkA>
            </MobileLi>
          ))}
        </ul>
      </MobileSubMenuWrapper>
    );
  });

  return (
    <>
      {/* ===== DESKTOP ===== */}
      <UlDesktop>
        {links}
      </UlDesktop>

      {/* ===== MOBILE ===== */}
      <ULMobile>
        <li style={{ margin: 0 }}>
          <MobileExpandButton
            type="button"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <i
              className={
                isMenuOpen
                  ? 'far fa-caret-square-up'
                  : 'far fa-caret-square-down'
              }
            />
          </MobileExpandButton>
        </li>

        <MobileSubMenuWrapper>
          <MobileSubMenuUl className={isMenuOpen ? 'show' : ''}>
            {mobileLinks}
          </MobileSubMenuUl>
        </MobileSubMenuWrapper>
      </ULMobile>
    </>
  );
};

MainMenu.propTypes = {
  i18nMessages: PropTypes.object,
  mainMenuLinks: PropTypes.array
};



