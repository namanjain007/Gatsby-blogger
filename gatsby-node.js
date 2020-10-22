//to create new pages from out local file markdown data
const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {//called whenever a new node is created and node is a page for now
    const { createNodeField } = actions;

    if(node.internal.type == "MarkdownRemark"){
        const slug = path.basename(node.fileAbsolutePath,".md");
         
        createNodeField({
            node,
            name : "slug",
            value : slug
        });
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    //console.log(JSON.stringify(result, null, 4))
    const { createPage } = actions;
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.fields.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })
  }