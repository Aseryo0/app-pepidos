import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import { useCart } from '../../hooks/useCart'

export const OrderHeader = () => {
  const { cart } = useCart()
  return (
    <Container>
      <Link to='/'>
        <img src={LogoImg} alt='logo do site' />
      </Link>
      <div>
        <div>
          <h3>Meus pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> pedido(s)
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  )
}
