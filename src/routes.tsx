import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import { Burguers } from './pages/Main/Burguers'
import { Pizzas } from './pages/Main/Pizzas'
import { Drinks } from './pages/Main/Drinks'
import { IceCreams } from './pages/Main/IceCream'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Burguers />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/ice-creams' element={<IceCreams />} />
      </Route>
    </Routes>
  )
}
