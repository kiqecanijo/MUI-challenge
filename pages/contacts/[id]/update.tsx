import { TableRow, TableCell } from '@mui/material'
import axios from 'axios'
import { ContactType } from '../../../utils/types'

const Contact = ({ contact }: { contact: ContactType }) => (
 <TableRow>
  <TableCell component="th" scope="row">
   {contact.firstName}
  </TableCell>
  <TableCell align="right">{contact.lastName}</TableCell>
  <TableCell align="right">{contact.email}</TableCell>
  <TableCell align="right">{contact.phone}</TableCell>
 </TableRow>
)

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
