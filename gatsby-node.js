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