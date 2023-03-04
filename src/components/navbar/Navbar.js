import React, {useState} from 'react'
import { FiSearch } from "react-icons/fi"
import { Link} from 'react-router-dom'
import "./Navbar.css"
import { BsCreditCardFill } from "react-icons/bs"
import { FaCarAlt } from "react-icons/fa"
import { GrLanguage } from "react-icons/gr"
import { HiShoppingCart } from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FiX } from "react-icons/fi"
import { LOG_IN } from '../../context/action/actionType';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'




function Navbar() {
  const [ show, setShow] = useState(false)
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(s => s.auth)
  const cart = useSelector(e => e.cart)



  const register = ()=>{
    if( username === "gladiator" && password === "09876543211" ){
     dispatch({type: LOG_IN, payload: {username, password}})
     navigate("/admin")
    }else{
      console.log("error");
      setError(true)
    }
  }

  const defaultCase = ()=>{
    setShow(false)
    setUsername("")
    setPassword("")
    setError(false)
  }

  const checkAdmin = ()=>{
    if(auth){
      return navigate("/admin")
    }
    setShow(true)
  }

  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  }

  

  return (
    <div className='navbar'>
        <Link to={"/"}>
        <div className="logo"></div>
        </Link>

        <div className="inp">
            <input type="text" placeholder='search' />
            <button><FiSearch/></button>
        </div>

        <div className="navbar__icons">
              <Link to={"/carta"} className="navbar__item">
              <h2><BsCreditCardFill/></h2>
              <h4>Payment</h4>
              </Link>
              <Link to={"/dos"} className="navbar__item">
              <h2><FaCarAlt/></h2>
              <h4>Orders</h4>
              </Link>
              <Link to={"/til"} className="navbar__item">
              <h2><GrLanguage/></h2>
              <h4>Language</h4>
              </Link>
              <Link to={"/basket"} className="navbar__item">
              <h2><HiShoppingCart/></h2>
              <h4>Basket</h4>
              <span className='nav__circle'>{cart?.length}</span>
              </Link>
              <Link to={"/like"} className="navbar__item">
              <h2><AiOutlineHeart/></h2>
              <h4>Like</h4>
              </Link>
              <Link>
              <div onClick={checkAdmin} className="navbar__item">
              <h2><BiUser/></h2>
              <h4>Access</h4>
              </div>
              </Link>
        </div>

        {
      show ? <>
     <div onClick={defaultCase} className="nav__shadow"></div>
     <div className="nav__login">
      <FiX onClick={defaultCase}  className='nav__close'/>
      <h2>Войти или создать профиль</h2>
      <span 
        className='error' 
        style={{opacity: error ? 1 : 0}}
        >Username yoki Parol xato</span>
      <br />
      <br />
      <br />
      <h3>Номер телефона</h3>
      <div className="nav__inp">
       <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='username'/>
       <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password'/>
       <br />
       <button onClick={register}>LOGIN</button>
      </div>
    </div>
    </>: 
    <></>
    }

      
        

      
    </div>
  )
}

export default Navbar