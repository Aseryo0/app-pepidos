import { CurrencyFormat } from '../../helpers/currencyFormat'
import { useCart } from '../../hooks/useCart'
import { SnackData } from '../../interfaces/SnackData'
import { SkeletonSnack } from './SkeletonSnack'
import { Container } from './styles'

interface SnacksProps {
  snakcs: SnackData[]
}

export const Snakcs = ({ snakcs }: SnacksProps) => {
  const { cart, addSnackIntoCart } = useCart()
  return (
    <Container>
      {!snakcs.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snakcs.map((snack) => {
            const snackExist = cart.find(
              (item) => item.snack === snack.snack && item.id === snack.id,
            )
            return (
              <div key={snack.id} className='snack'>
                {snackExist && <span>{snackExist.quantity}</span>}
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{CurrencyFormat(snack.price)}</strong>
                  <button type='button' onClick={() => addSnackIntoCart(snack)}>
                    +
                  </button>
                </div>
              </div>
            )
          })}
    </Container>
  )
}
