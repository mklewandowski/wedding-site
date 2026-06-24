import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5c6b4f',
      light: '#8a9a7d',
      dark: '#3d4a35',
    },
    secondary: {
      main: '#c9a87c',
      light: '#e0c9a8',
      dark: '#9a7a52',
    },
    background: {
      default: '#faf8f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#5a5a5a',
    },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "Georgia", serif',
    h1: {
      fontWeight: 400,
      letterSpacing: '0.02em',
    },
    h2: {
      fontWeight: 400,
    },
    h3: {
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Source Sans 3", "Helvetica", sans-serif',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"Source Sans 3", "Helvetica", sans-serif',
      textTransform: 'none',
      letterSpacing: '0.05em',
    },
  },
})
