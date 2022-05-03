import { Container, Button, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => (
 <Container>
  <Grid alignItems="center" display="flex" justifyContent="center">
   <Link href="/contacts">
    <a>
     <Button size="large" variant="contained">
      Go to Contacts
     </Button>
    </a>
   </Link>
  </Grid>
 </Container>
)

export default Home
