import { Container } from '../styles'
import { CurrencyFormat } from '../../../helpers/currencyFormat'
import { useCart } from '../../../hooks/useCart'

export const PayOrder = () => {
  const { cart } = useCart()
  const totalAmount = cart.reduce((acc, item) => (acc += item.subTotal), 0)
  return (
    <Container>
      <button type='submit'>Pagar</button>
      <span>
        Total: <strong>{CurrencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
