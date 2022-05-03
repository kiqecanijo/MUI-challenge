import {
  Typography,
  Button,
  Container,
  FormControl,
  Grid,
  TextField
} from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import { emailRegex } from '../../utils/extra'
import { State } from '../../utils/state'

const Contacts = () => {
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
    Create a new contact
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
           .post('https://bkbnchallenge.herokuapp.com/contacts/', data)
           .then(() => {
             router.push('/contacts')
             setState({
               ...state,
               alert: {
                 type: 'success',
                 message: 'Contact created successfully'
               }
             })
           })
           .catch(error => {
             setState({
               ...state,
               alert: {
                 type: 'error',
                 message: error.response.data.message
               }
             })
           })
       )}
      >
       Create
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

export default Contacts
