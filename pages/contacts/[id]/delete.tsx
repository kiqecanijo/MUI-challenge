import { Grid, Typography, Button, Container } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ContactType } from '../../../utils/types'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { useState } from 'react'

const Contact = ({ contact }: { contact: ContactType }) => {
  const router = useRouter()
  const [alert, setAlert] = useState<string | boolean>(false)

  return (
  <>
   <Snackbar
    open={!!alert}
    autoHideDuration={6000}
    onClose={() => setAlert(false)}
   >
    <MuiAlert severity="error">{alert}</MuiAlert>
   </Snackbar>

   <Container
    sx={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}
   >
    <Typography variant="h4" mb={3}>
     Are you sure that you want to delete this contact?
    </Typography>
    <Grid container spacing={3}>
     <Grid item xs={12} sm={6}>
      <Button
       variant="contained"
       color="error"
       onClick={() => {
         axios
           .delete(`https://bkbnchallenge.herokuapp.com/contacts/${contact._id}`)
           .then(() => {
             router.push('/contacts')
           })
           .catch(error => {
             setAlert(error.message)
           })
       }}
      >
       Delete
      </Button>
     </Grid>
     <Grid item xs={12} sm={6}>
      <Button
       variant="contained"
       color="primary"
       onClick={() => router.push('/contacts')}
      >
       Cancel
      </Button>
     </Grid>
    </Grid>
   </Container>
  </>
  )
}

Contact.getInitialProps = async ({ query }: { query: { id: string } }) => {
  const { id } = query
  const { data } = await axios.get(
  `https://bkbnchallenge.herokuapp.com/contacts/${id}`
  )

  return {
    contact: data
  }
}

export default Contact
