import React, { useState } from "react";

function Link_two(props) {
  return (
    <div>
      <h2 className="title-text-one">Туризм</h2>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Велотуризм</h3>
          <img
            src="https://images.prom.ua/3820414996_w0_h430_velobaul-na-bagazhnik.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn" id="velo">Інформація</button>
          
          <p>props.</p>
        </li>
        <li>
          <h3 className="title-content">Намети</h3>
          <img
            src="https://www.gorgany.com/pro/wp-content/uploads/2018/09/Nemo-Hornet-2P-lightweight-tent.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Спальні мішки</h3>
          <img
            src="https://images.prom.ua/3793175556_w600_h600_3793175556.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Рюкзаки</h3>
          <img
            src="https://files.cdn-files-a.com/uploads/3353960/normal_652cfaf0a575e.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Для рибалки</h3>
          <img
            src="https://media.istockphoto.com/id/1092160614/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B8%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0-%D0%B7%D1%96-%D1%81%D1%82%D1%80%D0%B8%D0%B6%D0%BD%D0%B5%D0%BC-%D1%89%D0%BE-%D0%BA%D1%80%D1%83%D1%82%D0%B8%D1%82%D1%8C-%D0%BA%D0%BE%D1%82%D1%83%D1%88%D0%BA%D1%83-%D0%BD%D0%B0-%D0%B1%D0%B5%D1%80%D0%B5%D0%B7%D1%96-%D1%80%D1%96%D1%87%D0%BA%D0%B8-%D1%81%D1%85%D1%96%D0%B4-%D1%80%D0%B8%D0%B1%D0%BE%D0%BB%D0%BE%D0%B2%D0%BB%D1%8F-%D0%BD%D0%B0-%D1%89%D1%83%D0%BA%D1%83-%D0%BE%D0%BA%D1%83%D0%BD%D1%8F-%D0%BA%D0%BE%D1%80%D0%BE%D0%BF%D0%B0.jpg?s=612x612&w=0&k=20&c=bVR02m3LAnc4CX4NXL8zcU-0tmucYtAbfp1rRoZgRJM="
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Походні печі</h3>
          <img
            src="https://images.prom.ua/4832101201_w600_h600_4832101201.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content-one">Генератори</h3>
          <img
            src="https://images.prom.ua/5955219670_w640_h640_generator-benzinovyj-invertornyj.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Каремати</h3>
          <img
            src="https://images.prom.ua/3998949375_w600_h600_3998949375.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Казанки</h3>
          <img
            src="https://kazan-mangal.com.ua/gallery/resizer.php?imgfile=photos%2F820_.jpg&max_width=230&max_height=230"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
    </div>
  );
}

export default Link_two;