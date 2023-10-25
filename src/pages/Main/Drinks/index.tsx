import { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snakcs } from '../../../components/Snakcks'
import { getDrinks } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'

export const Drinks = () => {
  const [drinks, setDrinks] = useState<SnackData[]>([])
  useEffect(() => {
    ;(async () => {
      const drinksData = await getDrinks
      setDrinks(drinksData.data)
    })()
  }, [])
  return (
    <>
      <Head title={'bebidas'} />
      <SnackTitle>Bebidas</SnackTitle>
      <Snakcs snakcs={drinks} />
    </>
  )
}
