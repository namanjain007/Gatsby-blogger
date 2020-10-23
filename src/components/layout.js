import React from 'react';

import Header  from "./header";
import Footer from "./footer";
import "../styles/index.scss";
import layoutModule from './scss-modules/layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutModule.container}>
            <div className={layoutModule.content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;