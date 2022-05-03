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
  Snackbar,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'
import { theme } from '../utils/theme'
import { RecoilRoot, useRecoilState } from 'recoil'
import { State } from '../utils/state'
import MuiAlert from '@mui/material/Alert'
import Link from 'next/link'

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
  const [{ alert, ...state }, setState] = useRecoilState(State)

  return (
  <ThemeProvider theme={themeSwitchable}>
   <CssBaseline />
   <Snackbar
    open={!!alert.message}
    autoHideDuration={6000}
    onClose={() =>
      setState({
        ...state,
        alert: {
          ...alert,
          message: ''
        }
      })
    }
   >
    <MuiAlert severity={alert.type}>{alert.message}</MuiAlert>
   </Snackbar>
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
     <Link href="/contacts">
      <Typography
       variant="h6"
       noWrap
       component="div"
       sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
      >
       Contacts
      </Typography>
     </Link>

     <Box sx={{ flexGrow: 1 }} />

     <Box>
      <IconButton
       size="large"
       aria-label="show more"
       aria-controls="primary-search-account-menu"
       aria-haspopup="true"
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

const App = (props: AppProps) => (
 <RecoilRoot>
  <BackBone {...props} />
 </RecoilRoot>
)

export default App
