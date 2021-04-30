import React from 'react';
import ReactDOM from 'react-dom';
import {  ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme'
import 'font-awesome/css/font-awesome.min.css';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

