import { useAppSelector } from "../redux/hooks"

const Carrito = () => {  
  const items = useAppSelector(state => state.products)

  return (
    <div className="carrito">
        <h2>Agregado al carrito</h2>
        <div className="items-list">
          {items.length 
          ? items.map(item => <li>{item.title}</li>)
          : <h2>¡Comienza a agregar tus productos!</h2>
          }
        </div>
        <div className="pricing">
            <h2>Precio total</h2>
            <p>$
              {items.reduce(
                (accumulator, item) => accumulator + item.price,
                 0)
              }
            </p>
        </div>
    </div>
  )
}

export default Carrito