import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import { Pizzas } from './pages/Main/Pizzas'
import { Drinks } from './pages/Main/Drinks'
import { IceCreams } from './pages/Main/IceCream'
import { Burgers } from './pages/Main/Burgers'
import { MyCart } from './pages/MyCart'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burgers />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/ice-creams' element={<IceCreams />} />
      </Route>
      <Route path='/cart' element={<MyCart />} />
    </Routes>
  )
}
