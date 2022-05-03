import { atom } from 'recoil'

interface StateType {
 alert: {
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
 }
}

export const State = atom<StateType>({
  key: 'state',
  default: {
    alert: {
      type: 'info',
      message: ''
    }
  }
})
