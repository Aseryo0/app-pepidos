import { useEffect, useState } from 'react'
import { getPizzas } from '../../../services/api'
import { SnackTitle } from '../../../components/SnackTitle'
import { Head } from '../../../components/Head'
import { Snakcs } from '../../../components/Snakcks'

export const Pizzas = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    ;(async () => {
      const pizzasData = await getPizzas
      setPizzas(pizzasData.data)
    })()
  })

  return (
    <>
      <Head title={'bebidas'} />
      <SnackTitle>Pizzas</SnackTitle>
      <Snakcs snakcs={pizzas} />
    </>
  )
}
