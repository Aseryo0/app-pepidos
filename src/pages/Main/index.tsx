import logoImg from '../../assets/logo.svg'
import { MyOrder } from '../../components/MyOrder'
import { SideBar } from '../../components/SideBar'
import { Container } from './styles'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <Container>
      <SideBar />
      <section>
        <img src={logoImg} alt='imagem com logo do site' />
        <Outlet />
        <MyOrder />
      </section>
    </Container>
  )
}
