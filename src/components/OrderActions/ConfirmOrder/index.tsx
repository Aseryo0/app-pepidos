import { CurrencyFormat } from '../../../helpers/currencyFormat'
import { useCart } from '../../../hooks/useCart'
import { Container } from '../styles'

export const ConfirmOrder = () => {
  const { cart, confirmOrder } = useCart()
  const totalAmount = cart.reduce((acc, item) => (acc += item.subTotal), 0)
  return (
    <Container>
      <button type='button' onClick={confirmOrder}>
        Finalizar Pedido
      </button>
      <span>
        Total: <strong>{CurrencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
