import { ReactNode, createContext, useEffect, useState } from 'react'
import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/api'
import { SnackData } from '../interfaces/SnackData'
interface SnackContextprops {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}
export const SnackContext = createContext({} as SnackContextprops)

export const SnackProvider = ({ children }: SnackProviderProps) => {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])
  useEffect(() => {
    ;(async () => {
      try {
        const burguerData = await getBurgers
        const pizzasData = await getPizzas
        const drinksData = await getDrinks
        const iceCreamsData = await getIceCreams

        const request = [burguerData, pizzasData, drinksData, iceCreamsData]
        const [
          { data: burguerResponse },
          { data: pizzasResponse },
          { data: DrinksResponse },
          { data: IceCreamsResponse },
        ] = await Promise.all(request)
        setBurgers(burguerResponse)
        setPizzas(pizzasResponse)
        setDrinks(DrinksResponse)
        setIceCreams(IceCreamsResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}
