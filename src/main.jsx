import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth.jsx';
import { ToastContainer } from "react-toastify";

import GlobalStyles from './styles/global';
import theme from './styles/theme';
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
        <ToastContainer/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
