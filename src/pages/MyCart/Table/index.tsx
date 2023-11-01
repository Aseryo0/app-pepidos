import { useEffect, useState } from 'react'
import { useCart } from '../../../hooks/useCart'
import { TableDesktop } from './TableDesktop'
import { TableMobile } from './TableMobile'

export const Table = () => {
  const [windowWidth, setwindowWidth] = useState(document.documentElement.clientWidth)

  useEffect(() => {
    function updateTable() {
      const currentWidth = document.documentElement.clientWidth

      setwindowWidth(currentWidth)
      window.addEventListener('resize', updateTable)
      return () => window.removeEventListener('resize', updateTable)
    }
    updateTable()
  }, [])

  const { cart } = useCart()
  if (cart.length === 0) return <h1>Oops! Parece que você não tem pedidos</h1>
  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
