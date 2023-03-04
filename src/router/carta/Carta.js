import React from 'react'
import "./Carta.css"


function Carta() {


  return (
    <div className='cart'>
      <div className="cart__admin">
        <h2>To'lov</h2>
        <h4>Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</h4>
        <input className='cart__inp' type="text" placeholder='Namuna A777 yoki B999 yoki M333' />
        <button className='cart__btn'>Tasdiqlash</button>
        <h5>B - buyurtma uchun</h5>
        <h5>A - account ochish</h5>
        <h5>M - rassrochkani so'ndirish uchun</h5>
      </div>
    </div>
  )
}

export default Carta