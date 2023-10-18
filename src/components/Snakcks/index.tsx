import { Container } from './style'

interface SnacksProps {
  snakcs: any[]
}
export const Snakcs = ({ snakcs }: SnacksProps) => {
  return (
    <Container>
      {snakcs.map((snack) => (
        <div key={snack.id} className='snack'>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <p>{snack.description}</p>
          <div>
            <strong>{snack.price}</strong>
            <button type='button'>+</button>
          </div>
        </div>
      ))}
    </Container>
  )
}
