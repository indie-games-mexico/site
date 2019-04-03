import React from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../context/Application';
import Header from '../components/common/header';
import { Joystick } from '../components/common/joystick';
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl';
import 'intl';

import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-flexbox-grid/dist/react-flexbox-grid.css';

const Layout = ({ children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs {
                  locale
                  name
                }
              }
              socialMediaLinks {
                icon
                link
                description,
                langKey
              }
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname;
        const { langs, defaultLangKey } = data.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
        return (
          <IntlProvider
            locale={langKey}
            messages={i18nMessages}
          >
            <div>
            <Helmet
              title={i18nMessages.title}
              meta={[
                { name: 'description', content: i18nMessages['seo.description'] },
                { name: 'keywords', content: i18nMessages['seo.keywords'] },
              ]}
            />
             <ApplicationContext.Consumer>
             { theme => (
               <>
               <Header langs={langsMenu} i18nMessages={i18nMessages} socialMediaLinks={data.site.siteMetadata.socialMediaLinks} theme={theme}/>
                 <div>
                   {children}
                 </div>
                 <Joystick width={50} height={50} />
               </>
             )}
             </ApplicationContext.Consumer>
            </div>
          </IntlProvider>
        )
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
