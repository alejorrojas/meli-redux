import { FormEvent, useEffect, useState } from "react"
import { Link, useLocation } from "wouter"
import logoMeli from "../assets/logo.png"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { loginUser } from "../redux/productSlice"


const Login = () => {
  const [username, setUser] = useState("")
  const [password, setPasword] = useState("")
  const [location, setLocation] = useLocation();
  const { loading, success, error } = useAppSelector(state => state.products)
  
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement> )=>{
    e.preventDefault();
    dispatch(loginUser({username, password}))
  }

  useEffect(() => {
    
    if(success) setLocation("/")
    if(error) alert("Por favor revisa tus credenciales nuevamente")
 
  }, [success, error])
  

  /*
  CREDENCIALES
  Username: Digital 
  Password: House
  */

  return (
    <>
      <nav>
        <Link href="/">
          <img src={logoMeli} />
        </Link>
      </nav>

      <div className="login">
        <h2 style={{"textAlign": "center"}}>Ingresa a tu cuenta</h2>

        <form onSubmit={handleSubmit}>
            <input name="username" onChange={(e) => setUser(e.target.value)} value={username} placeholder="Username" />
            <input name="password" onChange={(e) => setPasword(e.target.value)} value={password} placeholder="Password" />
            <button>
                {loading 
                 ? <div id="loading-spinner-sm"/>
                 : "Log in"
                 }  
            </button>
        </form>
      </div>
    </>
  )
}

export default Login