import { SnackTitle } from '../../../components/SnackTitle'
import { Head } from '../../../components/Head'
import { Snakcs } from '../../../components/Snakcks'
import { useSnack } from '../../../hooks/useSnackContext'

export const Pizzas = () => {
  const { pizzas } = useSnack()
  return (
    <>
      <Head title={'Pizzas'} />
      <SnackTitle>Pizzas</SnackTitle>
      <Snakcs snakcs={pizzas} />
    </>
  )
}
