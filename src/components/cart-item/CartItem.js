import React, { useState } from 'react'
import "./CartItem.css"
import { ADD_TO_CART, REMOVE_CART } from '../../context/action/actionType'
import { useDispatch, useSelector } from 'react-redux'


const BOT_TOKEN = "6109329154:AAHcN54wT4l4HTnODBIo83zJGEuxRliUAJo"
const CHAT_ID = "-750880491"

// chat id olsh uchun
// https://api.telegram.org/bot6109329154:AAHcN54wT4l4HTnODBIo83zJGEuxRliUAJo/getUpdates


// xabarni chatga yuborish uchun
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html





function Cart({karzinka}) {

  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [address, setAddress] = useState("")
  const [desc, setDesc] = useState("")
  const dispatch = useDispatch()





  const addToCart = (item) => {
    let index = karzinka.findIndex(i=> i.id === item.id)
    if( index < 0 ){
      return dispatch({type: ADD_TO_CART, payload: [...karzinka, {...item, qty: 1}]})
    }
    let newCart = karzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
     
    dispatch( {type: ADD_TO_CART, payload: newCart})
  }

  const removeCart = (item) => {
    let index = karzinka.findIndex(i=> i.id === item.id)

    if( index < 0 ){
      return dispatch({type: ADD_TO_CART, payload: [...karzinka, {...item, qty: 1}]})
    }
    let newCart = karzinka.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty - 1} : pro)
     
    dispatch( {type: ADD_TO_CART, payload: newCart})
  }
  const cart = useSelector(s => s.cart)

  const order = ()=>{
    let msg = ""
    msg += `Ism: <b>${name}</b> %0A`
    msg += `Tel: <b>${tel}</b> %0A`
    msg += `Address: <b>${address}</b> %0A`
    msg += `Ta'rif: <b>${desc}</b> %0A`


    msg+= "%0A<b>Buyurtmalar</b> %0A%0A"
    karzinka.forEach((order)=>{
      msg += `Nomi: ${order.title} %0A`
      msg += `Soni: ${order.qty} %0A`
      msg += `Narxi: ${order.price} %0A%0A`
    })

    const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}&parse_mode=html`
    let api = new XMLHttpRequest();
    api.open("GET", API_URL, true);
    api.send();
    const deleteINP = () =>{
       setName("")
       setTel("")
       setAddress("")
       setDesc("")
    }
    deleteINP()
  }

  
  return (
    <div className='cartt'>
        <h2>Cart item</h2>
        <input className='inp' value={name} onChange={e => setName(e.target.value)} type="text" placeholder='name' />
        <input className='unp' value={tel} onChange={e => setTel(e.target.value)} type="text" placeholder='tel' />
        <input className='anp' value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder='address' />
        <textarea className='area' value={desc} onChange={e => setDesc(e.target.value)} name="" placeholder='desc' id="" cols="30" rows="10"></textarea>
        <button className='atn' onClick={order}>Buyurtma berish</button>
        <div className='carts'>
          {
            karzinka.map((item, inx)=> <div key={inx} className="cart__item">
              <div className="cart__img">
                <img src={item?.urls[0]} width={100} alt="" />
              </div>
              <div className="cart__text">
                <p className='cart__name'>{item?.title}</p>
                <p className='cart__price'>{item?.price} so'm</p>
              </div>
              <div className="cart__button">
                <button className='cart__minus' disabled={ item?.qty <= 1 } onClick={()=> removeCart(item)}>-</button>
                <span className='cart__number'>{item?.qty}</span>
                <button style={{background: "red"}} className='cart__plus' onClick={()=> addToCart(item)}>+</button>
                <button style={{background: "black"}} className='cart__delete' onClick={()=> dispatch({type: REMOVE_CART, payload: item.id})}>delete</button>
              </div>
            </div>)
          }
        </div>
    </div>
  )
}

export default Cart