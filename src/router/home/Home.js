import React from 'react'
import "./Home.css"
import Banner from "../../components/banner/Banner"
import Products from '../../components/products/Products'
function Home() {
  return (
    <div className='container'>
        <div className="home">
            <Banner/>
            <Products/>
        </div>
    </div>
  )
}

export default Home