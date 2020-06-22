import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';

import './css/dashboard.css';

//import Button from '@material-ui/core/Button';
//import SideBar from './components/sideBar';
//import Usuarios from './components/usuarios';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1C1E21'
      }
    }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <Routes />
      </ThemeProvider>
    </Provider>
  );
}

//import { formatMs } from '@material-ui/core';

export default App;
