import React from 'react'
import "./Footer.css"
import {AiOutlineMobile} from "react-icons/ai"
import {MdOutgoingMail} from "react-icons/md"
import {FaFacebookF} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs" 
import {BsYoutube} from "react-icons/bs"
import {FaRss} from "react-icons/fa"
import { useLocation } from 'react-router-dom'


function Footer() {

    const {pathname} = useLocation()
    if(pathname.includes("admin")){
      return <></>
    }

  return (
    <div className='footer'>
        <div className="footer__about">
            <div className="footer__texts">
                <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
                <div>
                <h3>No need to go to the market now</h3>
                <p>We have favorable prices and delivery home</p>
                </div>
            </div>
            <div className="footer__texts">
                <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
                <div>
                <h3>Quick delivery</h3>
                <p>Our service surprises you</p>
                </div>
            </div>
            <div className="footer__texts">
                <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
                <div>
                <h3>Siz uchun qulayliklar</h3>
                <p>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
                </div>
            </div>
            <div className="footer__texts">
                <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
                <div>
                <h3>Bo'lib to'lash</h3>
                <p>3, 6, 9 va 12 oy davomida oldindan to'lovsiz</p>
                </div>
            </div>
        </div>
        <div className="footer__contact">
            <div className="footer__haqida">
                <h2>Ma'lumotlar</h2>
                <p>Ommaviy oferta (Foydalanuvchi bitimi)</p>
                <p>Muddatli toʻlov asosida sotib olishning umumiy qoidalari</p>
                <p>Muddatli to'lov shartlari</p>
                <p>Buyurtma qanday beriladi?</p>
                <p>Tovarlarni yetkazib berish va toʻlov turlari</p>
                <p>Buyurtmani bekor qilish va tovarni qaytarish</p>
                <p>Biz haqimizda</p>
                <p>Promo Kod (Kupon) ni qanday aktivlashtiringiz mumkin!</p>
            </div>
            <div className="footer__phone">
                <h2>Contact us</h2>
                <a href=""><AiOutlineMobile/>930593505</a>
                <p>info@asaxiy.uz</p>
            </div>
            <div className="footer__lan">
                <h2>We are on social networks  :</h2>
                <FaFacebookF/>
                <FaTelegramPlane/>
                <BsInstagram/>
                <BsYoutube/>
                <FaRss/>
            </div>
        </div>
        <div className='footer__hr'></div>
        <div className="footer__cartalar">
            <h3>To'lov turlari :</h3>
            <img src="https://logobank.uz:8005/media/logos_preview/Apelsin-01.png" alt="" />
            <img src="https://logobank.uz:8005/media/logos_preview/payme-01.png" alt="" />
            <img src="https://logobank.uz:8005/media/logos_preview/Click-01.png" alt="" />
            <img src="https://logobank.uz:8005/media/logos_preview/Uzcard-01.png" alt="" />
        </div>
        <div className="footer__hr"></div>
        <div className="footer__top">
            <p>2015-2022 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</p>
        </div>
    </div>
  )
}

export default Footer