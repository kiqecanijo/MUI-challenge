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
    <Typography variant="h4">
     Are you sure that you want to delete this contact?
    </Typography>
    <Grid container justifyContent="space-around" p={6}>
     <Button
      variant="outlined"
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

     <Button
      variant="outlined"
      color="primary"
      onClick={() => router.push('/contacts')}
     >
      Cancel
     </Button>
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
