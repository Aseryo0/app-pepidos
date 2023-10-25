import { useContext } from 'react'
import { SnackContext } from '../contexts/SnackContext'

export const useSnack = () => {
  return useContext(SnackContext)
}
