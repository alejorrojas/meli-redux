import { ICard } from "../types"

const Card = ({product}: ICard) => {
  return (
    <div className='card'>
        <img src={product.image} alt="product-img" />
        <br />
        <div className="content-card">
            <p>$ {product.price}</p>
            <span>Envio gratis</span>
        </div>
    </div>
  )
}

export default Card