import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const blogQuery = graphql`
    query{
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title
                        date
                    }
                    html
                }
            }
        }
    }
`;

const MyBlog = () => {
    const data = useStaticQuery(blogQuery).allMarkdownRemark;
    console.log(data);
    return (
        <div>
            <Layout>
                <div>
                    {data.edges.map(edge => {
                        return (
                            <div>
                                <h1>{edge.node.frontmatter.title}</h1>
                                <p>{edge.node.frontmatter.date}</p>
                            </div>
                        )
                    })}
                    <Link to="/contactme">Contact-me</Link>
                </div>
            </Layout>
        </div>
    );
};

export default MyBlog;