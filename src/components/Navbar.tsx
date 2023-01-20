import logoMeli from "../assets/logo.png"
import carrito from "../assets/carrito.png"
import menu from "../assets/menu.png"

const Navbar = () => {
  return (
    <nav>
        <img src={logoMeli} />

        <div className="input-box">
            <input type="text" />
            <button type="submit">+</button>
        </div>

        <div className="options-box">
            <img src={menu} alt="menu" />
            <img src={carrito} alt="carrito" />
        </div>

    </nav>
  )
}

export default Navbar