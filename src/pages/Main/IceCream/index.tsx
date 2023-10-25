import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snakcs } from '../../../components/Snakcks'
import { useSnack } from '../../../hooks/useSnackContext'

export const IceCreams = () => {
  const { iceCreams } = useSnack()

  return (
    <>
      <Head title={'IceCreams'} />
      <SnackTitle>IceCreams</SnackTitle>
      <Snakcs snakcs={iceCreams} />
    </>
  )
}
