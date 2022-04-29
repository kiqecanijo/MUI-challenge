import '../utils/reset.css'

import { ThemeProvider } from '@emotion/react'
import {
  AppBar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'
import { theme } from '../utils/theme'

/**
 *  Main Backbone Component
 * @param Component Default component provided from index.tsx
 * @returns JSX.Element
 */

const BackBone = ({ Component, pageProps }: AppProps) => {
  const mode = useMediaQuery('(prefers-color-scheme: light)') ? 'light' : 'dark'

  const themeSwitchable = useMemo(
    () =>
      createTheme({
        ...theme[mode],
        spacing: 8,
        shape: {
          borderRadius: 20
        }
      }),
    [mode]
  )

  return (
  <ThemeProvider theme={themeSwitchable}>
   <CssBaseline />
   <AppBar position="static" color="primary">
    <Toolbar>
     <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ mr: 2 }}
     >
      <Menu open={false} />
     </IconButton>

     <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: 'none', sm: 'block' } }}
     >
      Contacts
     </Typography>

     <Box sx={{ flexGrow: 1 }} />

     <Box>
      <IconButton
       size="large"
       aria-label="show more"
       aria-controls="primary-search-account-menu"
       aria-haspopup="true"
       onClick={console.log}
       color="inherit"
      />
     </Box>
    </Toolbar>
   </AppBar>
   <Container
    sx={{
      pt: { xs: 4, sm: 5, md: 6, lg: 7, xl: 8 }
    }}
   >
    <Component {...pageProps} />
   </Container>
  </ThemeProvider>
  )
}

export default BackBone
