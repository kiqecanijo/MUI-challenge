import { ThemeOptions } from '@mui/material'

export const theme: {
 [x: string]: ThemeOptions
} = {
  light: {
    palette: {
      mode: 'light',
      primary: {
        main: '#3FEEA5',
        light: '#3FEEA5',
        dark: '#3FEEA5',
        contrastText: '#fff'
      },
      secondary: {
        main: '#0B262D',
        light: '#0B262D',
        dark: '#0B262D',
        contrastText: '#fff'
      },
      background: {
        default: '#fff'
      },
      text: {
        primary: '#0B262D',
        secondary: '#fff'
      }
    }
  },
  dark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#3FEEA5',
        light: '#3FEEA5',
        dark: '#3FEEA5',
        contrastText: '#0B262D'
      },
      secondary: {
        main: '#00E7DE',
        light: '#00E7DE',
        dark: '#00E7DE',
        contrastText: '#fff'
      },
      background: {
        default: '#0B262D'
      },
      text: {
        primary: '#ededed',
        secondary: '#fff'
      }
    }
  }
}
