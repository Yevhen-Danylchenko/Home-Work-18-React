import React, { useState } from "react";

function Link_five(props) {
  return (
    <div>
      <h2 className="title-text-one">Товари для жінок</h2>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Верхній одяг</h3>
          <img
            src="https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/bd/svetlo-bezhevaya-shuba-iz-iskusstvennogo-meha-71799-1730886667-1.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn" id="velo">
            Інформація
          </button>
        </li>
        <li>
          <h3 className="title-content">Плаття</h3>
          <img
            src="https://leomirra.com.ua/content/images/8/250x333l80nn0/plate-43338-839628-19706737708059.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Блузки</h3>
          <img
            src="https://images.prom.ua/5669220936_w600_h600_5669220936.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Туфлі</h3>
          <img
            src="https://sezon.ua/image/cache/catalog/image/easyfoto/18428/tufli-zhenskie-590234-bezhevye-1-300x300.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Слакси</h3>
          <img
            src="https://image-thumbs.shafastatic.net/604734990_310_430"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Босоножки</h3>
          <img
            src="https://sezon.ua/image/cache/catalog/image/easyfoto/17732/bosonozhki-zhenskie-kozhanye-589043-bezhevye-1-300x300.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content-one">Білизна</h3>
          <img
            src="https://sokolingerie.com/cdn/shop/products/gloria1_400x.jpg?v=1630485830"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Сумки</h3>
          <img
            src="https://static.wittchen.com/photos/pomaranchevij-1-97-4Y-107-6/64aea227bf685?f=gAAAAABnKLbOanBYflRIXCtBP1BiLikzbFjAU0V8hlogrRTF0iNeGvGlK6BTBC4U7vsotzC4nAsDvKFPFKe8P_IM5YxB9JP5tA=="
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Для догляду</h3>
          <img
            src="https://cdn.27.ua/799/19/83/7674243_1.jpeg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
    </div>
  );
}

export default Link_five;
