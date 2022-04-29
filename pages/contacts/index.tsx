import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  Stack
} from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next/types'
import useSWR from 'swr'
import { ResponseType } from '../../utils/types'

const Contacts = ({
  data: serverData,
  query
}: {
 data: ResponseType
 query: NextPageContext['query']
}) => {
  const router = useRouter()
  const { data, error } = useSWR(
    { url: 'https://bkbnchallenge.herokuapp.com/contacts', args: query },
    {
      fallbackData: serverData
    }
  )

  return (
    (error && (
   <Typography variant="h4" color="error">
    {error.message}
   </Typography>
    )) || (
   <Table sx={{ minWidth: 650 }} aria-label="simple table" color="ineherit">
    <TableHead>
     <TableRow>
      <TableCell>Email</TableCell>
      <TableCell align="right">First Name</TableCell>
      <TableCell align="right">Last Name</TableCell>
      <TableCell align="right">Phone</TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     {data?.results?.map(contact => (
      <TableRow
       key={`${contact.email}-${contact.firstName}-${contact.lastName}`}
       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
       <TableCell component="th" scope="row">
        {contact.firstName}
       </TableCell>
       <TableCell align="right">{contact.lastName}</TableCell>
       <TableCell align="right">{contact.email}</TableCell>
       <TableCell align="right">{contact.phone}</TableCell>
      </TableRow>
     ))}
     <TableRow>
      <TableCell colSpan={4} align="right">
       <Stack>
        <Pagination
         count={data?.totalPages}
         page={data?.currentPage}
         color="primary"
         sx={{
           justifyContent: 'flex-end',
           display: 'flex'
         }}
         onChange={(_, page) =>
           router.push({
             pathname: router.pathname,
             query: { ...query, page }
           })
         }
        />
       </Stack>
      </TableCell>
     </TableRow>
    </TableBody>
   </Table>
    )
  )
}

Contacts.getInitialProps = async ({ query }: NextPageContext) => {
  // `getStaticProps` is executed on the server side.
  const { data }: { data: ResponseType } = await axios.get(
    'https://bkbnchallenge.herokuapp.com/contacts',
    {
      params: query
    }
  )

  return {
    data,
    query
  }
}

export default Contacts
