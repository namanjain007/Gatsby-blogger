import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout";

const query1 = graphql`
  query{
    site{
      siteMetadata{
        author
      }
    }
  }
`;
 
const MainPage = () => {
  return (
    <div>
      <Layout>
        <h2>This is just a simple bloggig site maintained {useStaticQuery(query1).site.siteMetadata.author} and uses gatsby and some plugins.</h2>
      </Layout>
    </div>
  );
};

export default MainPage;