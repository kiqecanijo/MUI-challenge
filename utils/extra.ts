export const emailRegex =
 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const mockData = {
  count: 22,
  perPage: 10,
  currentPage: 1,
  totalPages: 3,
  results: [
    {
      _id: '626c1d3a99a6ba0016233539',
      firstName: 'lucas',
      lastName: 'casco',
      email: 'lucastomascasco@gmail.com',
      phone: '1123914794',
      createdAt: '2022-04-29T17:15:38.184Z',
      updatedAt: '2022-04-29T17:15:38.184Z'
    },
    {
      _id: '626c2abd99a6ba001623353a',
      firstName: 'emma',
      lastName: 'casco',
      email: 'emma@gmail.com',
      phone: '1154657520',
      createdAt: '2022-04-29T18:13:17.785Z',
      updatedAt: '2022-04-29T18:13:17.785Z'
    },
    {
      _id: '626c2c2999a6ba001623353b',
      firstName: 'lucas2',
      lastName: 'casco2',
      email: 'lucastomascasco2@gmail.com',
      phone: '1123914744',
      createdAt: '2022-04-29T18:19:21.471Z',
      updatedAt: '2022-04-29T18:19:21.471Z'
    }
  ]
}
