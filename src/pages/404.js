import React from 'react';
import { Link } from "gatsby";

import Layout from '../components/layout';

const Error = () => {
    return (
        <div>
            <Layout>
                <h1>
                    404...Page not Found
                </h1>
                <Link to="/">Home</Link>
            </Layout>
        </div>
    );
};

export default Error;