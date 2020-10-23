import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';

//we are not using useStaticQuery as our query is dymamic
//exporting means providing query to gatsby
//then it runs this query and $slug will come from context of this dynamic page 
//that we set during gatsby-node api declaration 
//and provide it as a prop to this Blog component.

export const blogquery = graphql`
query($slug : String! ){
    markdownRemark(fields :{
      slug :{
        eq : $slug
      }
    }){
     frontmatter{
      title
      date
     }
     html
    }
  }
`;

const Blog = (props) => {
    const propdata = props.data.markdownRemark;
    return (
        <Layout>
            <h2>{propdata.frontmatter.title}</h2>
            <p>{propdata.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={ { __html : propdata.html} }></div>
        </Layout>
    );
};

export default Blog;