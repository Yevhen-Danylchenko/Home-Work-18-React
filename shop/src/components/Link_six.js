import React, { useState } from "react";

function Link_six(props) {
  return (
    <div>
      <h2 className="title-text-one">Товари для дітей</h2>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Верхній одяг</h3>
          <img
            src="https://dejavu-kids.com.ua/content/images/14/339x475l85nn0/kurtka3613-43831391574690.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn" id="velo">Інформація</button>
          
          <p>props.</p>
        </li>
        <li>
          <h3 className="title-content">Одяг для хлопців</h3>
          <img
            src="https://www.bogi.ua/wp-content/webp-express/webp-images/uploads/2022/01/NYC04291-819x1024.jpg.webp"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Одяг для дівчат</h3>
          <img
            src="https://storage.super-kids.com.ua/cache/Girls/%D0%94%D1%96%D0%B2%D1%87%D0%B0%D1%82%D0%B0/IMG_9439.jpg/655880ecff8777bbfaa31234106f27a9.jpg?p=catalog_product_mobile&s=f8256e78b381d1cae1034cc4bfef6073"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content">Немовлята</h3>
          <img
            src="https://epicentrk.ua/upload/iblock/3c3/download_9-_1_.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Взуття для хлопців</h3>
          <img
            src="https://images.prom.ua/5435614665_w600_h600_5435614665.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content">Взуття для дівчат</h3>
          <img
            src="https://mercury-shoes.com/57025-home_default/chereviki-pidlitkovi-dlya-divchat.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
      <ul className="flex ul-content">
        <li>
          <h3 className="title-content-one">Іграшки для хлопців</h3>
          <img
            src="https://karapuzov.com.ua/image/catalog/blog/2020-November/dlja-malchikov/igrushki-dlja-malchikov-2020.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Іграшки для дівчат</h3>
          <img
            src="https://myplay.ua/tmp/cache/images/4e/ba7/372157-1jpg-638x638-r.webp"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
        <li>
          <h3 className="title-content-one">Для немовлят</h3>
          <img
            src="https://st.depositphotos.com/1000459/2698/i/450/depositphotos_26983405-stock-photo-toys.jpg"
            alt="photo"
            className="photo"
          ></img>
          <button className="btn">Інформація</button>
        </li>
      </ul>
    </div>
  );
}

export default Link_six;