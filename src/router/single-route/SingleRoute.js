import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleRoute.css";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../server";

function SingleRoute() {
  const params = useParams();

  const [data, setData] = useState([]);

  const productsColRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const products = await getDocs(productsColRef);
      setData(products.docs.map((pro) => ({ ...pro.data(), id: pro.id })));
    };
    getProducts();
  }, []);

  const oneItem = data?.find((el) => el.id === params.id);

  if (!oneItem) {
    return (
      <div className="placeholder container">
        <div className="placeholder__image"></div>
        <div className="placeholder__text">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="product__overall">
        <div className="product_pic_info">
          <div className="product__pic">
            <img src={oneItem?.urls[0]} alt="" />
          </div>
          <div className="product__info">
            <h3 className="product_name_info">{oneItem?.title}</h3>
            <h2>{oneItem?.price} so'm</h2>
            <h4>{oneItem?.desc}</h4>

            <h5>
              Holati: <b>* sotuvda bor</b>
            </h5>
          </div>
        </div>
        <div className="product__sell">
          <div className="product__add">
            <h2>{oneItem?.price} so'm</h2>
            <p className="delivery_info">
              Yetkazib berish to'g'risida ma'lumot:{" "}
              <HiOutlineExclamationCircle className="Exclamation" />
            </p>
            <h3>
              <TbTruckDelivery className="TruckDelivery" /> Standart yetkazib
              berish
            </h3>
            <p className="delivery_time">
              Manzilga qarab *** soatdan *** ish kunigacha yetkazib beriladi
            </p>
            <hr />
            <button className="product_add_bascet">
              <SlBasket className="product__bascet" /> Savatchaga qo'shish
            </button>
            <button className="product_buy">Bir bosishda sotib olish</button>
          </div>
          <div className="product__add ">
            <p className="delivery_info">Bo'lib to'lash</p>
            <h2>{oneItem?.price} so'm / 12 oy</h2>
            <span className="bank_icon">gabriel</span>
            <span className="bank_icon">BANK</span>
            <hr />
            <button className="product_add_bascet basket__red">
              Bo'lib to'lash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleRoute;