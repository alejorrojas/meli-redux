import { Product } from "../types"

const Carrito = () => {  
  const items: Product[] = []

  return (
    <div className="carrito">
        <h2>Agregado al carrito</h2>
        {items.length 
        ? items.map(item => <li>{item.title}</li>)
        : <h2>¡Comienza a agregar tus productos!</h2>
        }
        <div className="pricing">
            <h2>Precio total</h2>
            <p>$0</p>
        </div>
    </div>
  )
}

export default Carrito