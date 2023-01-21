import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import oferta from "./assets/oferta.jpg"

function App() {

  return (
    <div className="App">
        <Navbar/>
        <img src={oferta} alt="oferta" width={"100%"} />

        <Cards/>
    </div>
  )
}

export default App
