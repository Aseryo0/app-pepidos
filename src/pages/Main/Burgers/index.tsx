import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snakcs } from '../../../components/Snakcks'
import { useSnack } from '../../../hooks/useSnackContext'

export const Burgers = () => {
  const { burgers } = useSnack()
  return (
    <>
      <Head title={'Hamburguers'} />
      <SnackTitle>Hamburguers</SnackTitle>
      <Snakcs snakcs={burgers} />
    </>
  )
}
