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
                    fields{
                        slug
                    }
                }
            }
        }
    }
`;

const MyBlog = () => {
    const data = useStaticQuery(blogQuery).allMarkdownRemark;
    return (
        <Layout>
            <h1>All Blogs</h1>
            {data.edges.map(({node}) => {
                return (
                    <Link to={`/blog/${node.fields.slug}`} key={node.fields.slug}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>{node.frontmatter.date}</p>
                    </Link>
                )
            })}
            <Link to="/contactme">Contact-me</Link>
        </Layout>
    );
};

export default MyBlog;