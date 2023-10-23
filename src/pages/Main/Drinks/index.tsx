import { useState, useEffect } from 'react'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snakcs } from '../../../components/Snakcks'
import { getDrinks } from '../../../services/api'

export const Drinks = () => {
  const [drinks, setDrinks] = useState([])
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
