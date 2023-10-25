import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snakcs } from '../../../components/Snakcks'
import { getBurgers } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'

export const Burgers = () => {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  useEffect(() => {
    ;(async () => {
      const burguerData = await getBurgers
      setBurgers(burguerData.data)
    })()
  }, [])
  return (
    <>
      <Head title={'Hamburguers'} />
      <SnackTitle>Hamburguers</SnackTitle>
      <Snakcs snakcs={burgers} />
    </>
  )
}
