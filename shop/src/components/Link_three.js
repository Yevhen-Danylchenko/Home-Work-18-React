import React, { useState } from "react";

function Link_three(props) {
  return (
    <div>
      <h2 className="title-text-one">Товари для дому</h2>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Постільна білизна</h3>
          <img
            src="https://images.prom.ua/3134170755_postilna-bilizna-byaz.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn" id="velo">Інформація</button>
          
          <p>props.</p>
        </li>
        <li>
          <h3 className="title-content">Рушники</h3>
          <img
            src="https://odeyalka.com.ua/image/cache/catalog/fotonastatti/e3bd72f2c65c62ae8d3ad89a175995a1-1000x690.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Посуд</h3>
          <img
            src="https://images.prom.ua/3215023048_w600_h600_3215023048.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Миючі засоби</h3>
          <img
            src="https://cdn.27.ua/sc--media--prod/default/7f/22/30/7f22307e-d626-4973-bfe0-9d410834b8f5.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Побутова техніка</h3>
          <img
            src="https://www.volynnews.com/files/news/2023/03-28/358420/523553.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Прикраси для дому</h3>
          <img
            src="https://domsmam.com/wp-content/uploads/2021/11/new-year-home-interior-31-1.jpeg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content-one">Сервізи</h3>
          <img
            src="https://cdn.27.ua/799/55/2a/546090_6.jpeg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Меблі</h3>
          <img
            src="https://klen.ua/modules/ph_simpleblog/covers/134.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Штори</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr93lI9L57fsHr8woZYmEq5Qbj4BVQrt_erw&s"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
    </div>
  );
}

export default Link_three;