import { Container } from './styles'
import { useCart } from '../../../../hooks/useCart'
import { CurrencyFormat } from '../../../../helpers/currencyFormat'
import minusIcon from '../../../../assets/circle-minus.svg'
import plusIcon from '../../../../assets/circle-plus.svg'
import { FaTrashAlt } from 'react-icons/fa'
import { ConfirmOrder } from '../../../../components/OrderActions/ConfirmOrder'

export const TableMobile = () => {
  const { cart, removeSnackFromCart, snackIncrement, snackDecrement } = useCart()
  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.snack}-${item.id}`} className='order-item'>
          <div>
            <img src={item.image} alt={`imagem de um ${item.name}`} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{CurrencyFormat(item.price)}</span>
            <div>
              <div>
                <button type='button' onClick={() => snackDecrement(item)}>
                  <img src={minusIcon} alt='icone de diminuir pedido' />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button type='button' onClick={() => snackIncrement(item)}>
                  <img src={plusIcon} alt='icone de aumentar pedido' />
                </button>
              </div>
              <button type='button' onClick={() => removeSnackFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span>Subtotal</span> {CurrencyFormat(item.subTotal)}
            </h5>
          </div>
        </div>
      ))}
      <ConfirmOrder />
    </Container>
  )
}
