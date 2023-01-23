import logoMeli from "../assets/logo.png"
import carrito from "../assets/carrito.png"
import search from "../assets/loupe.png"
import menu from "../assets/menu.png"
import Carrito from "./Carrito"
import useToggle from "../hooks/useToggle"

const Navbar = () => {
  const [isOpen, toggleOpen] = useToggle()

  return (
    <>
      <nav>
          <img src={logoMeli} />

          <div className="input-box">
              <input type="text" placeholder="Buscar productos, marcas y mas..." />
              <button type="submit"> 
                <img src={search} alt="search" />
              </button>
          </div>

          <div className="options-box">
              <img src={menu} alt="menu" />
              <button className="carrito-btn" onClick={toggleOpen}>
                <img src={carrito} alt="carrito" />
              </button>
          </div>
      </nav>
      {isOpen && <Carrito/>}
    </>
  )
}

export default Navbar