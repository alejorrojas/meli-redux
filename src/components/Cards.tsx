import { useQuery } from 'react-query'
import { getProducts } from '../services/products.service'
import Card from './Card'

const Cards = () => {
  const {isLoading, data} = useQuery("products",   ()=>getProducts())
 
  if(isLoading) return <div>Loading....</div>

  return (
    <section className='section-cards'>
        {data?.map(product => <Card product={product} />)}
    </section>
  )
}

export default Cards