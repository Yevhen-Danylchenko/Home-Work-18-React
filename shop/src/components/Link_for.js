import React, { useState } from "react";

function Link_for(props) {
  return (
    <div>
      <h2 className="title-text-one">Товари для чоловіків</h2>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Куртки</h3>
          <img
            src="https://volodar.in.ua/content/images/37/452x480l85nn0/43859585142440.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn" id="velo">Інформація</button>
          
          <p>props.</p>
        </li>
        <li>
          <h3 className="title-content">Костюми</h3>
          <img
            src="https://st.depositphotos.com/1246892/2279/i/450/depositphotos_22793262-stock-photo-businessman-standing-on-dark-background.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Взуття</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0um0BowyH_WgxyD8a2nc_qnQISdpS2mS_Dw&s"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Спортивні костюми</h3>
          <img
            src="https://images.prom.ua/4300207853_w600_h600_4300207853.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Аксесуари</h3>
          <img
            src="https://ukrainart.com.ua/image/data/artists/SHubetskaOksana-2651/psPdK561188D8-DDA3-499B-A174-BCD3450D0B01.jpeg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Білизна</h3>
          <img
            src="https://images.prom.ua/5358631636_w600_h600_5358631636.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content-one">Рибалка</h3>
          <img
            src="https://static8.depositphotos.com/1035224/877/i/450/depositphotos_8775274-stock-photo-the-man-in-a-boat.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Для догляду</h3>
          <img
            src="https://sisters.co.ua/thumb/4/images/product/7075/10973/novyj-proekt-2023-06-01t171203.619.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Органайзери</h3>
          <img
            src="https://images.prom.ua/5236462075_w640_h320_muzhskoj-organajzer-dlya.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
    </div>
  );
}

export default Link_for;