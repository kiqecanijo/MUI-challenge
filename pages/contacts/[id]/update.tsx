import {
  Typography,
  Container,
  FormControl,
  TextField,
  Button,
  Grid
} from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ContactType } from '../../../utils/types'

import { useForm } from 'react-hook-form'
import { emailRegex } from '../../../utils/extra'
import { useRecoilState } from 'recoil'
import { State } from '../../../utils/state'

const Contact = ({ contact }: { contact: ContactType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const router = useRouter()

  const [{ alert, ...state }, setState] = useRecoilState(State)

  return (
  <Container>
   <Typography
    variant="h6"
    sx={{
      paddingY: 2
    }}
   >
    {contact._id}
   </Typography>
   <FormControl>
    <Grid
     container
     spacing={4}
     sx={{
       justifyContent: 'center'
     }}
    >
     <Grid item>
      <TextField
       size="small"
       error={!!errors.email}
       id="outlined-required"
       defaultValue={contact.email}
       variant="outlined"
       label="Email"
       {...register('email', {
         required: true,
         validate: email => email.match(emailRegex)
       })}
      />
     </Grid>
     <Grid item>
      <TextField
       size="small"
       error={!!errors.firstName}
       id="outlined-required"
       label="Fist Name"
       defaultValue={contact.firstName}
       variant="outlined"
       {...register('firstName', { validate: value => value.length > 0 })}
      />
     </Grid>
     <Grid item>
      <TextField
       size="small"
       error={!!errors.lastName}
       id="outlined-required"
       label="Last Name"
       defaultValue={contact.lastName}
       variant="outlined"
       {...register('lastName', { validate: value => value.length > 0 })}
      />
     </Grid>
     <Grid item>
      <TextField
       size="small"
       error={!!errors.phone}
       id="outlined-required"
       label="Phone"
       defaultValue={contact.phone}
       variant="outlined"
       {...register('phone', {
         validate: {
           size: value => value.length >= 6 && value.length <= 10
         }
       })}
       helperText={
        errors?.phone?.type === 'size' &&
        'Phone must contain between 6 \n and 10 characters'
       }
      />
     </Grid>
     <Grid item>
      <Button
       sx={{
         m: 1
       }}
       fullWidth
       type="submit"
       variant="contained"
       color="primary"
       onClick={handleSubmit(data =>
         axios
           .put(
          `https://bkbnchallenge.herokuapp.com/contacts/${contact._id}`,
          data
           )
           .then(() => {
             router.push('/contacts')
             setState({
               ...state,
               alert: {
                 type: 'success',
                 message: 'Contact updated successfully'
               }
             })
           })
           .catch(error =>
             setState({
               ...state,
               alert: {
                 message: error.response.data.message,
                 type: 'error'
               }
             })
           )
       )}
      >
       Update
      </Button>

      <Button
       sx={{
         m: 1
       }}
       fullWidth
       variant="outlined"
       color="error"
       onClick={() => router.push('/contacts')}
      >
       Cancel
      </Button>
     </Grid>
    </Grid>
   </FormControl>
  </Container>
  )
}

export const getServerSideProps = async ({
  query
}: {
 query: { id: string }
}) => {
  const { id } = query
  const { data } = await axios.get(
  `https://bkbnchallenge.herokuapp.com/contacts/${id}`
  )

  return {
    props: { contact: data }
  }
}

export default Contact
