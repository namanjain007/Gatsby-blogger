import React from 'react';
import { Link , graphql, useStaticQuery} from 'gatsby';

import headerStyles from "./scss-modules/header.module.scss";

const query1 = graphql`
    query{
        site{
            siteMetadata{
                title
                author
            }
        }
    }
`;

const Header = () => {
    const data = useStaticQuery(query1);

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link to="/" className={headerStyles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contactme">Contact</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;