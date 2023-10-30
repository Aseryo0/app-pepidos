import { Container } from './styles'
import plusImg from '../../../../assets/circle-plus.svg'
import minusIgm from '../../../../assets/circle-minus.svg'
import { FaTrashAlt } from 'react-icons/fa'
import { CurrencyFormat } from '../../../../helpers/currencyFormat'
import { useCart } from '../../../../hooks/useCart'

export const TableDesktop = () => {
  const { cart, removeSnackFromCart } = useCart()
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
              <td>
                <div>
                  <button type='button' onClick={() => {}}>
                    <img src={minusIgm} alt='icone de remover quantidade de pedido' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => {}}>
                    <img src={plusImg} alt='icone de adicionar pedidos' />
                  </button>
                </div>
              </td>
              <td>
                <h5>{CurrencyFormat(item.subTotal)}</h5>
              </td>
              <td>
                <button type='button' onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
