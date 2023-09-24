import React from 'react'
import Navbar from './header/Navbar'
import Footer from './Footer'
import PropTypes from 'prop-types';

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
};


export default Layout