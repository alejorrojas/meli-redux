import { ICard } from "../types"
import { useAppDispatch } from "../redux/hooks"
import { addProduct } from "../redux/productSlice"
import { useState } from "react"

const Card = ({product}: ICard) => {
  const [isAdd, setAdd] = useState(false)
  const dispatch = useAppDispatch()

  //Styling is optional
  const handleClick = ()=>{
    dispatch(addProduct(product))
    setAdd(true)
  }
  

  return (
    <div className='card'>
        <button className={isAdd ? "btn-add" : "btn-base"} onClick={handleClick}>+</button>
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