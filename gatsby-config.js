require('dotenv').config({
  path: `.env`
})

const languages = require('./src/data/languages');
const socialMediaLinks = require('./src/data/social-media-links');
const mainMenuLinks = require('./src/data/main-menu-links');



module.exports = {
  siteMetadata: {
    title: `Indie Games Mexico`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: '@indiegamesmexico',
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    languages,
    socialMediaLinks,
    mainMenuLinks
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-i18n', // will be use later for blog type pages
      options: {
        langKeyForNull: 'en',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: true,
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `ZCOOL QingKe HuangYou`,
          'Rajdhani'
        ],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
