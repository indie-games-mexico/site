// https://github.com/angeloocana/gatsby-plugin-i18n/blob/master/packages/gatsby-starter-default-i18n/src/components/SelectLanguage.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import  styled  from 'styled-components';

const LanguageMenuWrapper = styled.ul`
    position:relative;
    padding:0;
    margin:0;
    list-style-type: none;
    line-height: 3.50em;
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

const LanguageChooser = ({ langs, intl }) => {
  const linkTitle = intl.formatMessage({id: 'language'});
  const currentLocale = intl.formatMessage({id: 'locale'});
  const links = langs
                .map(lang => Object.assign({}, lang, { link: `/${lang.langKey.locale}/`, active: currentLocale === lang.langKey.locale }))
                .map(lang =>
    <SubMenuItem key={lang.langKey.locale } active={lang.active}>
      <LanguageLink href={lang.link}>{lang.langKey.name}</LanguageLink>
    </SubMenuItem>
  );

  let [menuState, setMenuState] = useState(false);

  return (
    <LanguageMenuWrapper>
      <Li>
        <LanguageButton onClick={()=> { setMenuState(!menuState); }}>
            <i className="fas fa-globe"></i> {linkTitle} <SyledI className={menuState === false? 'fas fa-plus' : 'fas fa-minus' }></SyledI>
        </LanguageButton>
        <SubMenu style={{
            display: menuState? 'block' : 'none'
         }}>
          {links}
        </SubMenu>
      </Li>
    </LanguageMenuWrapper>
  );
};

LanguageChooser.propTypes = {
  langs: PropTypes.array
};

export default injectIntl(LanguageChooser);
