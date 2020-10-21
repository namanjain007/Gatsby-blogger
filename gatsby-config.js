/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 * this is a nodejs file -> see module.exports
 */
// you need to restart the server if you change the path in source file system as gatsby only once creates schema during bootstrap

module.exports = {
  siteMetadata:{
    title : "Simple Blogging site!",
    author : "Naman Jain"
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,// to connect graphql to local files data
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
