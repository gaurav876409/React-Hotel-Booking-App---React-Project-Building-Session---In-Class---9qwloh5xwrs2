import React from 'react';
import Navbar from "../components/Navbar";

const Layout = ({ isDarkMode, toggleDarkMode, children }) => {
  return (
    <>
      <Navbar 
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}/>
      {children}
    </>
  )
}

export default Layout;