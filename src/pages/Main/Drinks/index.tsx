import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snakcs } from '../../../components/Snakcks'

export const Drinks = () => {
  const data = [
    {
      id: 1,
      snack: 'drinks',
      name: 'Coca-Cola',
      description: 'uma deliciosa coca-cola pra refrescar seu dia, mim dê papai',
      price: 25.5,
      image:
        'https://casadosalgado.com.br/image/cache/catalog/hJmPB5Yb4auCfmzUlxCf4uv4dSTYYOMLqvCpVO6b-800x532.jpg',
    },
    {
      id: 2,
      snack: 'drinks',
      name: 'Suco de Laranja',
      description: 'Agora eu quero relaxar',
      price: 35.5,
      image:
        'https://valtra.coopercitrus.com.br/wp-content/uploads/sites/58/2020/07/shutterstock_68566873.jpg',
    },
  ]
  return (
    <>
      <Head title={'bebidas'} />
      <SnackTitle>Bebidas</SnackTitle>
      <Snakcs snakcs={data} />
    </>
  )
}
