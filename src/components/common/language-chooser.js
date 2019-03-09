// https://github.com/angeloocana/gatsby-plugin-i18n/blob/master/packages/gatsby-starter-default-i18n/src/components/SelectLanguage.js

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import  styled  from 'styled-components';

const LanguageMenuWrapper = styled.ul`
    font-family: 'ZCOOL QingKe HuangYou', cursive;
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
  display:block;
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
    box-shadow: 1px 1px 14px 0px rgba(240, 248, 255, .6);
  }
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

  return (
    <LanguageMenuWrapper>
      <Li>
        <LanguageButton>
            <i className="fas fa-globe"></i> {linkTitle} <i className="fas fa-sort-down"></i>
        </LanguageButton>
        <SubMenu>
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

/*
<ul title={linkTitle} id="blog-links">
  {links}
</ul>
*/
