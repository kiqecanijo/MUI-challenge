import { Grid, Typography, Button, Container } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ContactType } from '../../../utils/types'
import { useRecoilState } from 'recoil'
import { State } from '../../../utils/state'

const Contact = ({ contact }: { contact: ContactType }) => {
  const router = useRouter()
  const [{ alert, ...state }, setState] = useRecoilState(State)
  return (
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
     variant="contained"
     color="error"
     onClick={() =>
       axios
         .delete(`https://bkbnchallenge.herokuapp.com/contacts/${contact._id}`)
         .then(() => {
           router.push('/contacts')
           setState({
             ...state,
             alert: {
               type: 'success',
               message: 'Contact deleted successfully'
             }
           })
         })
         .catch(error =>
           setState({
             ...state,
             alert: {
               type: error,
               message: error.response.data.message
             }
           })
         )
     }
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
