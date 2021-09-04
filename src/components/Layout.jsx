import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout(props) {
    const { children } = props;
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout
