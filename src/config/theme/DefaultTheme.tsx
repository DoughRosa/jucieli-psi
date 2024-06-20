import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#f5cec7',
    secondary: '#f4eeed',
    terciary: '#a88dab',
  },
};

interface DefaultThemeProps {
  children: React.ReactNode;
}

function DefaultTheme({ children }: DefaultThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default DefaultTheme;
