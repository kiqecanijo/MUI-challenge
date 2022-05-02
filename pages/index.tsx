import { Container, Button, Grid, Link } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => (
 <Container>
  <Grid alignItems="center" display="flex" justifyContent="center">
   <Link href="/contacts">
    <Button size="large" variant="contained">
     Go to Contacts
    </Button>
   </Link>
  </Grid>
 </Container>
)

export default Home
