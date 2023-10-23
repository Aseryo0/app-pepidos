import { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snakcs } from '../../../components/Snakcks'
import { getIceCreams } from '../../../services/api'

export const IceCreams = () => {
  const [IceCreams, setIceCreams] = useState([])

  useEffect(() => {
    ;(async () => {
      const IceCreamsData = await getIceCreams
      setIceCreams(IceCreamsData.data)
    })()
  })

  return (
    <>
      <Head title={'bebidas'} />
      <SnackTitle>Pizzas</SnackTitle>
      <Snakcs snakcs={IceCreams} />
    </>
  )
}
