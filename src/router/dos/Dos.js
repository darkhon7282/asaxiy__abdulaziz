import React from 'react'
import "./Dos.css"

function Dos() {
  return (
    <div className='dos'>
      <div className="dos__about">
        <div className="dos__texts">
          <h2>Buyurtma holati</h2>
          <h4>Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</h4>
          <p>Buyurtma raqami*</p>
          <input type="text" />
          <p>Buyurtma berilgandagi telefon raqami *</p>
          <input type="number" />
          <div className="dos__i"></div>
          <button>Ko'rinish</button>
        </div>
        <div className="dos__img">
          <img src="https://asaxiy.uz/custom-assets/images/tracking.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Dos