import { CurrencyFormat } from '../../../../helpers/currencyFormat'
import { useCart } from '../../../../hooks/useCart'
import { Container } from './styles'

export const TableDesktop = () => {
  const { cart } = useCart()
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.description} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{CurrencyFormat(item.price)}</span>
              </td>
              <td>{item.quantity}</td>
              <td>
                <h5>{CurrencyFormat(item.subTotal)}</h5>
              </td>
              <td>Deletar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
