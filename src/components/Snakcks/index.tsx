import { CurrencyFormat } from '../../helpers/currencyFormat'
import { SnackData } from '../../interfaces/SnackData'
import { SkeletonSnack } from './SkeletonSnack'
import { Container } from './styles'

interface SnacksProps {
  snakcs: SnackData[]
}
export const Snakcs = ({ snakcs }: SnacksProps) => {
  return (
    <Container>
      {!snakcs.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snakcs.map((snack) => (
            <div key={snack.id} className='snack'>
              <h2>{snack.name}</h2>
              <img src={snack.image} alt={snack.name} />
              <p>{snack.description}</p>
              <div>
                <strong>{CurrencyFormat(snack.price)}</strong>
                <button type='button'>+</button>
              </div>
            </div>
          ))}
    </Container>
  )
}
