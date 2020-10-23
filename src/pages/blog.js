import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Blogstyle from './blog.module.scss';
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
            <ol>
                {data.edges.map(({node}) => {
                    return (
                        <li className={Blogstyle.post}>
                            <Link to={`/blog/${node.fields.slug}`} key={node.fields.slug}>
                                <h3>{node.frontmatter.title}</h3>
                                <p>{node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            <Link to="/contactme">Contact-me</Link>
        </Layout>
    );
};

export default MyBlog;