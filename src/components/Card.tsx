import { ICard } from "../types"

const Card = ({product}: ICard) => {
  return (
    <div className='card'>
        <button className="btn-add" onClick={()=>alert("Product added")} >+</button>
        <div className="img-card">
          <img src={product.image} alt="product-img" />
        </div>
        <hr/>
        <div className="content-card">
            <p>$ {product.price}</p>
            <span>Envio gratis</span>
        </div>
    </div>
  )
}

export default Card