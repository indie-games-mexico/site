// https://github.com/angeloocana/gatsby-plugin-i18n/blob/master/packages/gatsby-starter-default-i18n/src/components/SelectLanguage.js

import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import { injectIntl } from 'react-intl';
import { NavDropdown } from 'react-bootstrap';

const SelectLanguage = ({ langs, intl }) => {
  const linkTitle = intl.formatMessage({id: 'language'});
  const currentLocale = intl.formatMessage({id: 'locale'});
  const links = langs
                .map(lang => Object.assign({}, lang, { link: `/${lang.langKey.locale}/`, active: currentLocale === lang.langKey.locale }))
                .map(lang =>
    <NavDropdown.Item key={lang.langKey.locale } active={lang.active} href={lang.link}>{lang.langKey.name}</NavDropdown.Item>
  );

  return (
    <NavDropdown title={linkTitle} id="blog-links">
      {links}
    </NavDropdown>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default injectIntl(SelectLanguage);
