import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/App.css';
// import Navbar from './components/Navbar';
import Home from './container/Home';
import Login from "./container/Login";
import HotelDetails from "./container/HotelDetails";
import Layout from "./container/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Theme configuration
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <div className="">
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="home"
            element={
              <Layout 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="hotel-details/:slug"
            element={
              <Layout
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              >
                <HotelDetails />
              </Layout>
            }
          />
            <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}


export default App;
