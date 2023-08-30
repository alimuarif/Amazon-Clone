import React from "react";
import "../Css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="123478"
            title="Turtle Beach Stealth 600 Gen 2 MAX Wireless Amplified Multiplatform Gaming Headset for PS5, PS4, Nintendo Switch, PC & Mac with 48+ Hour Battery, Lag-free Wireless, & 50mm Speakers – Black"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="123479"
            title="Acer Predator Cestus 350 Wireless Gaming Mouse: NVIDIA Reflex - Up to 16000 DPI - RGB Lighting - 8 Programmable Buttons - On-Board Memory - 5 Profile Settings - Pixart 3335 Sensor - Black"
            image="https://m.media-amazon.com/images/I/619MwJFZMWL._AC_UY218_.jpg"
            price={85.5}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RGIASSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            Le
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x40@_retinamobilex2s"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L. AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RGIOSSUXEN 49' Curved
            LED Gaming Monitor - Super Ultra Wide
            Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            
          />
        </div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
