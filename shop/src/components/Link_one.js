import React, { useState } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";

import ButtonOnClick from "../App";

function Link_one(props) {
  return (
    <div>
      <h2 className="title-text-one">Спортивні товари</h2>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Велоспорт</h3>
          <img
            src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="photo"
            className="photo"
          ></img>

          <button className="btn" id="velo" onClick={ButtonOnClick}>
            Інформація
          </button>
        </li>
        <li>
          <h3 className="title-content">Футбол</h3>
          <img
            src="https://onlyballs.com.ua/image/cache/catalog/avatars/1277410549_w640_h640_myach-futbolnyj-kozhanyj-800x800.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Плавання</h3>
          <img
            src="https://zakarpattya.net.ua/postimages/pub/2019/12/18.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Східні єдиноборства</h3>
          <img
            src="https://st4.depositphotos.com/19928324/38012/i/450/depositphotos_380129406-stock-photo-render-boxing-ring.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Каякинг</h3>
          <img
            src="https://kayakmarket.com.ua/content/uploads/images/32.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Теніс</h3>
          <img
            src="https://kort.com.ua/sites/default/files/inline-images/sportsvit_20_of_79_0.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content-one">Баскетбол</h3>
          <img
            src="https://images.prom.ua/1433171845_w600_h600_1433171845.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Волейбол</h3>
          <img
            src="https://metaratings.ru/upload/sprint.editor/853/8539a8d1ccbda68cecd7473459f021de.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Важка атлетика</h3>
          <img
            src="https://st2.depositphotos.com/1017228/7108/i/450/depositphotos_71080155-stock-photo-closeup-image-of-a-fitness.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
    </div>
  );
}

export default Link_one;
