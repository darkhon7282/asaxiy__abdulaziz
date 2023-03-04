import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


function Banner() {

    

    return (
        <div className='banner'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                loop={true}
                className="mySwiper"
            >
                
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/63f9ecf6e752e.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/63f77a3d01a7d.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/63dcb4dbbdb88.jpg.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/63f77a6b5c2a5.jpg.webp" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner