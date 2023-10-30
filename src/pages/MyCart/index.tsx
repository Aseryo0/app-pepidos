import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OderHeader'
import { Table } from './Table'
import { Container } from './styles'

export const MyCart = () => {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
      <Table />
    </Container>
  )
}
