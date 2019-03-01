module.exports = {
  siteMetadata: {
    title: `Indie Games Mexico`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: '@gatsbyjs',
    menus: [
      {
        title: "Blog",
        id: 'blog-links',
        links: [
          {
            href: '#',
            name: 'Game On'
          },
          {
            href: '#',
            name: 'Our Game: Field Rivals'
          },
          {
            href: '#',
            name: 'Characters and Attributes'
          }
        ]
      },
      {
        title: 'Language',
        id: 'locale-links',
        links: [
          {
            href: '#',
            name: 'English United States'
          },
          {
            href: '#',
            name: 'Spanish Mexico'
          },
        ]
      }
    ]
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
