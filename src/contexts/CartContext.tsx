import { ReactNode, createContext, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'
interface Snack extends SnackData {
  quantity: number
  subTotal: number
}
interface removeSnackProps {
  id: number
  snack: string
}
interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}
interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
}
interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    const snackExist = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

    if (snackExist) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subTotal = item.price * quantity
          return { ...item, quantity, subTotal }
        }
        return item
      })
      toast.success(`outro ${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
      setCart(newCart)
      return
    }

    const newSnack = { ...snack, quantity: 1, subTotal: snack.price }
    const newCart = [...cart, newSnack]
    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
    setCart(newCart)
  }

  return <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
}
