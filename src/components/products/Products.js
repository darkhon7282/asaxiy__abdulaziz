import React, {useState, useEffect  } from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { HiShoppingCart } from "react-icons/hi"
import { ADD_TO_CART, REMOVE_LIKE, ADD_TO_LIKE } from "../../context/action/actionType"
import { useDispatch, useSelector } from 'react-redux' 
import { db } from "../../server"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"

function Products({admin}) {

    const dispatch = useDispatch()
    const cart = useSelector(s=>s.cart)
    const [data, setData] = useState([])
  const likes = useSelector(s=>s.heart)



  const [refresh, setRefresh] = useState(false)

  const productColRef = collection(db, "products")
  const addHeart = (item)=>{
    let index = likes.findIndex(i=> i.id === item.id)
    if(index > -1){
      return
    }
    dispatch({type:ADD_TO_LIKE, payload: item})
  }

    let nma = [
        {
            image: "https://assets.asaxiy.uz/product/main_image/desktop//632ad81784d10.png.webp",
            name: "iPhone 11 pro",
            price: 12_000_000
        },
        {
            image: "https://assets.asaxiy.uz/product/main_image/desktop//62020cdc1a278.jpg.webp",
            name: "iPhone 11 pro",
            price: 12_000_000
        },
        {
            image: "https://assets.asaxiy.uz/product/main_image/desktop//63f771bc051d4.jpg.webp",
            name: "iPhone 11 pro",
            price: 12_000_000
        },
    ]

    useEffect(()=>{
      const getProducts = async () =>{
        const products = await getDocs(productColRef)
        setData(products.docs.map((pro)=> ({ ...pro.data(), id: pro.id}) ))
      }
      getProducts()
    }, [refresh])
  
    console.log(data);

    const addToCart = (item) => {
        let index = cart.findIndex(i=> i.id === item.id)
        if( index < 0 ){
          return dispatch({type: ADD_TO_CART, payload: [...cart, {...item, qty: 1}]})
        }
        let newCart = cart.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
         
        dispatch( {type: ADD_TO_CART, payload: newCart})
      }

      const deleteProduct = async(id)=>{
        await deleteDoc(doc(db, "products", id))
          .then(res=> {
            console.log(res)
            setRefresh(!refresh)
          })
          .catch(res=> console.log(res))
      }

  return (
    <div className='product'>
        {
            data?.map((item, inx)=>
            <div key={inx} className="product__about">
                <Link to={`/product/${item.id}`}>
                 <img src={item?.urls[0]} alt="" />
                </Link>
                <div className="product__star">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
                <h3>{item?.name}</h3>
                <del>{item?.price / 12} so'm</del>
                <h4>{item?.price} so'm</h4>
                <div className="product__shop">
                    <HiShoppingCart className='shop'/>
                </div>
                <div  className='product__heart'>
                  {
                    likes?.some(i => i.id === item.id) ? 
                    <AiFillHeart style={{color: "red"}} onClick={()=> dispatch({type:REMOVE_LIKE, payload: item.id})}/> : 
                    <AiOutlineHeart onClick={()=> addHeart(item)} />
                  }
                </div>
                {
                  admin ? <button onClick={()=> deleteProduct(item.id)}>Delete</button>
                   : 
                   <button className='product__btn' onClick={()=> addToCart(item)}> Add to Cart</button>

                }
            </div>)
        }
    </div>
  )
}

export default Products