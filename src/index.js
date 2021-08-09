import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Theme from './component/theme/theme';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <React.StrictMode> 
    <App />
  </React.StrictMode>
  </ThemeProvider>
 ,
  document.getElementById('root')
);
