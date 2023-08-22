'use client';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ContextThemeProvider } from '@/contexts/themeContext';
import { darkTheme, theme } from '@/styles/theme';
const MainLayout = ({ children }) => {
  return (
    <ContextThemeProvider>
      {(myTheme) => (
        <ThemeProvider theme={myTheme === 'light' ? theme : darkTheme}>
          {children}
        </ThemeProvider>
      )}
    </ContextThemeProvider>
  );
};

export default MainLayout;
