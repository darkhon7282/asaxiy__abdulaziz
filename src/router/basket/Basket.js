import React from 'react'
import "./Basket.css"
import CartItem from "../../components/cart-item/CartItem"
import { useSelector } from 'react-redux'

function Basket() {
  const cart = useSelector(s=> s.cart)

  return (
    <div className='basket'>

      <CartItem karzinka={cart}/>
    </div>
  )
}

export default Basket