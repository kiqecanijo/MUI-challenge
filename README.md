#Challenge [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)
Deploy on **Vercel** 👆

## Philosophy

_"Make it simple"_
_"Create a UI for the API"_
_"Be worried about how, and not what"_

## Features

| _Feature _ | _Status_ |                                                   _Comments_                                                    |
| :--------: | :------: | :-------------------------------------------------------------------------------------------------------------: |
|    SSR     |    ✅    |                    data provided from server, not browser <br> perfect match between both 👌🏼                    |
|    MUI     |    ✅    | added a full design system bassed<br> on a color schema <br> suppport for dark mode from user preferences 🌙 ☀️ |
| Typescript |    ✅    |                                   100% typescipt coverage without any any 🥁                                    |
| Storybook  |   ⛔️    |                                    no custom components added, not required                                     |
|  Prettier  |    ✅    |                                              custom prettier rules                                              |
|   Eslint   |    ✅    |                    custom eslint rules, no conflics using <br> **prettier eslint** in VScode                    |
|     CD     |    ✅    |                                            **Vercel** implementation                                            |
|    Jest    |    ✅    |                                              minimal jest coverage                                              |
|   Redux    |    ⚠️    |                                               used recoil instead                                               |
|   Recoil   |    ✅    |                                           Powerfull state manager 💪                                            |

## Cool details:

- **All Components, variants sizes, rounds, and more are previously <br> handled by the design system, check all the setup here:**

`https://www.figma.com/file/MtBHPh5dbpvMKceYL3NYJW/MUI-for-Figma-v5.4.0---Material-UI?node-id=4662%3A14`

|                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![demo](https://i.ibb.co/Lk6RNJn/Screen-Shot-2022-05-04-at-0-39-49.png 'demo')](https://i.ibb.co/Lk6RNJn/Screen-Shot-2022-05-04-at-0-39-49.png 'demo') |

- **Server and browser render math after hydratation in all routes**

| _Server generated_                                                                                      | _Broser hydratation_                                                                                    |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [![server](https://i.ibb.co/jw8wGyb/result.png 'server')](https://i.ibb.co/jw8wGyb/result.png 'server') | [![server](https://i.ibb.co/jw8wGyb/result.png 'server')](https://i.ibb.co/jw8wGyb/result.png 'server') |

- `/contacts` **route its a UI for you API, all your params can be used here**
  for example:
  `/contacts?&page=2&_sort=firstName:ASC`
  `/contacts?perPage=10&page=1&firstName_contains=Rick`
