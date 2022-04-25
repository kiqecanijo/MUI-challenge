import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import type { NextPage } from 'next'

import { ThreeDRotation, Menu } from '@mui/icons-material'

const Home: NextPage = () => (
 <>
  <AppBar position="static">
   <Toolbar>
    <IconButton
     size="large"
     edge="start"
     color="inherit"
     aria-label="open drawer"
     sx={{ mr: 2 }}
    >
     <Menu />
    </IconButton>

    <Typography
     variant="h6"
     noWrap
     component="div"
     sx={{ display: { xs: 'none', sm: 'block' } }}
    >
     Backone
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
     >
      <Switch checked={isDarkTheme} onChange={changeTheme} />
     </IconButton>
    </Box>
   </Toolbar>
  </AppBar>
  <Container>
   <Button size="large" variant="outlined">
    Hello
   </Button>
  </Container>
 </>
)

export default Home
