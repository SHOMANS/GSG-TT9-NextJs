export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff0000',
    background: '#ffffff',
    paper: '#f5f5f5',
  },
  fontsSizes: {
    small: '1.2rem',
    medium: '1.6rem',
    large: '2.4rem',
    xlarge: '3.2rem',
  },
  fonts: {
    primary: 'Roboto, sans-serif',
  },
  media: {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1025px)',
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#000000',
    paper: '#121212',
  },
};
