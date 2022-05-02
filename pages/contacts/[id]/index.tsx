import { TableRow, TableCell, Table, TableBody, TableHead } from '@mui/material'
import axios from 'axios'
import { ContactType } from '../../../utils/types'

const Contact = ({ contact }: { contact: ContactType }) => (
 <Table sx={{ minWidth: 650 }} aria-label="simple table" color="ineherit">
  <TableHead>
   <TableRow>
    <TableCell>Id</TableCell>
    <TableCell align="right">Email</TableCell>
    <TableCell align="right">First Name</TableCell>
    <TableCell align="right">Last Name</TableCell>
    <TableCell align="right">Phone</TableCell>
   </TableRow>
  </TableHead>
  <TableBody>
   <TableRow
    key={`${contact.email}-${contact.firstName}-${contact.lastName}`}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
   >
    <TableCell component="th" scope="row">
     {contact._id}
    </TableCell>
    <TableCell align="right">{contact.firstName}</TableCell>
    <TableCell align="right">{contact.lastName}</TableCell>
    <TableCell align="right">{contact.email}</TableCell>
    <TableCell align="right">{contact.phone}</TableCell>
   </TableRow>
  </TableBody>
 </Table>
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
