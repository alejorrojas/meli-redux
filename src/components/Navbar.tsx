import logoMeli from "../assets/logo.png"
import carrito from "../assets/carrito.png"
import search from "../assets/loupe.png"
import menu from "../assets/menu.png"

const Navbar = () => {
  return (
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
            <img src={carrito} alt="carrito" />
        </div>

    </nav>
  )
}

export default Navbar