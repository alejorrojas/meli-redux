import { useQuery } from 'react-query'
import { getProducts } from '../services/products.service'
import Card from './Card'
import Loading from './Loading'

const Cards = () => {
  const {isLoading, data} = useQuery("products",   ()=>getProducts())
 
  if(isLoading) return <Loading/>

  return (
    <section>
      <h2>Basado en tu última visita</h2> 
      <div className='section-cards'>
          {data?.map(product => <Card product={product} />)}
      </div>
    </section>
  )
}

export default Cards