import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snakcs } from '../../../components/Snakcks'
import { useSnack } from '../../../hooks/useSnackContext'

export const Drinks = () => {
  const { drinks } = useSnack()
  return (
    <>
      <Head title={'bebidas'} />
      <SnackTitle>Bebidas</SnackTitle>
      <Snakcs snakcs={drinks} />
    </>
  )
}
