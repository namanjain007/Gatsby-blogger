import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import HomeLayout from "./home.module.scss";

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
        <h1>Hello</h1>
        <h2 className={HomeLayout.para}>This is just a simple bloggig site maintained {useStaticQuery(query1).site.siteMetadata.author} and uses gatsby and some plugins.</h2>
      </Layout>
    </div>
  );
};

export default MainPage;