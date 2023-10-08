import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1440,
    },
  },

});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Dashboard />
        </CssBaseline>
      </ThemeProvider>

    </div>
  );
}

export default App;
