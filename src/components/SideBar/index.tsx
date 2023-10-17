import { Container } from './style'
import { useState } from 'react'
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import menuImg from '../../assets/menu.svg'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
  const [menuStatus, setMenuStatus] = useState(false)

  const handleOpenMenu = () => {
    setMenuStatus(!menuStatus)
  }
  return (
    <Container isMenuOpen={menuStatus}>
      <button type='button' onClick={handleOpenMenu}>
        <img src={menuImg} alt='botao de abrir e fechar menu' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <BurguerIcon />
              <span>Hamburguer</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/pizzas'>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='drinks'>
              <SodaIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/ice-creams'>
              <IceCreamIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
