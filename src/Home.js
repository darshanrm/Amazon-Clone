import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>

        <div className="home_row">
          <Product
            id={111}
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={222}
            title="Stylish kitchen mixer Stylish kitchen mixerStylish kitchen mixerStylish kitchen mixer"
            price={429.93}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id={333}
            title="Stylish kitchen mixer Stylish kitchen mixerStylish kitchen mixerStylish kitchen mixer"
            price={429.93}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={3}
          />
          <Product
            id={444}
            title="Stylish kitchen mixer Stylish kitchen mixerStylish kitchen mixerStylish kitchen mixer"
            price={429.93}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={3}
          />
          <Product
            id={555}
            title="mobil jvdbnlfnna mmmssmmfjwopymbdeij  jigjigjmobil jvdbnlfnna mmmssmmfjwopymbdeij  jigjigjmobil jvdbnlfnna mmmssmmfjwopymbdeij  jigjigjmobil jvdbnlfnna mmmssmmfjwopymbdeij  jigjigj"
            price={429.93}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id={666}
            title="jigjigjmobil jvdbnlfnna mmmssmmfjwopymbdeij  jigjigjmobil jvdbnlfnjigjigjmobil jvdbnlfnna mmmssmmfjwopymbdeij  jigjigjmobil jvdbnlfn"
            price={24329.03}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
