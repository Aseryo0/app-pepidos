import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snakcs } from '../../../components/Snakcks'

export const Burguers = () => {
  const data = [
    {
      id: 1,
      snack: 'burguer',
      name: 'Mega',
      description: 'peido peido peidooo',
      price: 25.5,
      image:
        'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incrível.png&w=1920&q=75',
    },
    {
      id: 2,
      snack: 'burguer',
      name: 'Extra Bacon',
      description: 'peido peido peidooo',
      price: 35.5,
      image:
        'https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incrível.png&w=1920&q=75',
    },
  ]
  return (
    <>
      <Head title={'Hamburguers'} />
      <SnackTitle>Hamburguers</SnackTitle>
      <Snakcs snakcs={data} />
    </>
  )
}
