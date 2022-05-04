import { Delete, Edit, Visibility, Add } from '@mui/icons-material'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Pagination,
  Stack,
  IconButton,
  Fab
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
   <>
    <Table sx={{ minWidth: 650 }} aria-label="simple table" color="ineherit">
     <TableHead>
      <TableRow>
       <TableCell>Id</TableCell>
       <TableCell align="right">First Name</TableCell>
       <TableCell align="right">Last Name</TableCell>
       <TableCell align="right">Email</TableCell>
       <TableCell align="right">Phone</TableCell>
       <TableCell colSpan={3} align="center">
        Actions
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {data?.results?.map(contact => (
       <TableRow key={contact._id}>
        <TableCell component="th" scope="row">
         {contact._id}
        </TableCell>
        <TableCell align="right">{contact.firstName}</TableCell>
        <TableCell align="right">{contact.lastName}</TableCell>
        <TableCell align="right">{contact.email}</TableCell>
        <TableCell align="right">{contact.phone}</TableCell>
        <TableCell align="right">
         <IconButton
          color="primary"
          onClick={() => router.push(`/contacts/${contact._id}`)}
         >
          <Visibility />
         </IconButton>
        </TableCell>
        <TableCell align="right">
         <IconButton
          color="secondary"
          onClick={() => router.push(`/contacts/${contact._id}/update`)}
         >
          <Edit />
         </IconButton>
        </TableCell>
        <TableCell align="right">
         <IconButton
          color="error"
          onClick={() => router.push(`/contacts/${contact._id}/delete`)}
         >
          <Delete />
         </IconButton>
        </TableCell>
       </TableRow>
      ))}
      <TableRow>
       <TableCell colSpan={8} align="right">
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
    <Fab
     sx={{
       position: 'absolute',
       bottom: 50,
       right: 50
     }}
     onClick={() => router.push('/contacts/create')}
     aria-label="add"
    >
     <Add />
    </Fab>
   </>
    )
  )
}

export const getServerSideProps = async ({ query }: NextPageContext) => {
  // `getStaticProps` is executed on the server side.
  const { data }: { data: ResponseType } = await axios.get(
    'https://bkbnchallenge.herokuapp.com/contacts',
    {
      params: query
    }
  )

  return {
    props: {
      data,
      query
    }
  }
}

export default Contacts
