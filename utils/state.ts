import { createTheme } from '@mui/material'
import { atom, selector } from 'recoil'
import { theme } from './theme'
import { StateType } from './types'

export const State = atom<StateType>({
  key: 'state',
  default: {
    mode: 'dark',
    alert: {
      type: 'info',
      message: ''
    }
  }
})

export const Theme = selector({
  key: 'theme',
  get: ({ get }) =>
    createTheme({
      ...theme[get(State).mode],
      spacing: 8,
      shape: {
        borderRadius: 20
      }
    })
})
