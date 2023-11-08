import { ReactNode, createContext, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'
import { useNavigate } from 'react-router-dom'
import { CustomerData } from '../interfaces/CustomeData'
interface Snack extends SnackData {
  quantity: number
  subTotal: number
}
interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackIncrement: (snack: Snack) => void
  snackDecrement: (snack: Snack) => void
  confirmOrder: () => void
  payOrder: (customer: CustomerData) => void
}
interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Snack[]>([])
  const navigate = useNavigate()

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

  function removeSnackFromCart(snack: Snack) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))
    setCart(newCart)
  }
  function updateSnack(snack: Snack, newQuantity: number) {
    if (newQuantity <= 0) return
    const snackExistInCart = cart.find((item) => item.id === snack.id && item.snack === snack.snack)

    if (!snackExistInCart) return
    const newCart = cart.map((item) => {
      if (item.id === snackExistInCart.id && item.snack === snackExistInCart.snack) {
        return {
          ...item,
          quantity: newQuantity,
          subTotal: item.price * newQuantity,
        }
      }
      return item
    })
    setCart(newCart)
  }

  function snackIncrement(snack: Snack) {
    updateSnack(snack, snack.quantity + 1)
  }

  function snackDecrement(snack: Snack) {
    updateSnack(snack, snack.quantity - 1)
  }
  function confirmOrder() {
    navigate('/payment')
  }
  function payOrder(customer: CustomerData) {
    console.log('payment', cart, customer)
    return
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackDecrement,
        snackIncrement,
        confirmOrder,
        payOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
