import '../utils/reset.css'

import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline, useMediaQuery } from '@mui/material'
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
        shape: {
          borderRadius: 80
        }
      }),
    [mode]
  )

  return (
  <ThemeProvider theme={themeSwitchable}>
   <CssBaseline />
   <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default BackBone
