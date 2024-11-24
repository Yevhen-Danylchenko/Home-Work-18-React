import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Link_one from "./components/Link_one";
import Link_two from "./components/Link_two";
import Link_three from "./components/Link_three";
import Link_for from "./components/Link_for";
import Link_five from "./components/Link_five";
import Link_six from "./components/Link_six";

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">Інтернет магазин</h1>
        <nav>
          <ul className="flex ul-content">
            <li>
              <h2 className="title-text">Спортивні товари</h2>
              <img
                src="https://st.depositphotos.com/1063346/2333/i/450/depositphotos_23333388-stock-photo-assorted-sports-equipment-on-a.jpg"
                alt="photo"
                className="photo"
              ></img>
              <Link to="/link_one">
                <button className="btn">Перейти до категорії</button>
              </Link>
            </li>
            <li>
              <h2 className="title-text">Туризм</h2>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwt5opKaqWXoQBF3UgGi4YNXZ0xv5Kp65FQ&s"
                alt="photo"
                className="photo"
              ></img>
              <Link to="/link_two">
                <button className="btn">Перейти до категорії</button>
              </Link>
            </li>
            <li>
              <h2 className="title-text">Товари для дому</h2>
              <img
                src="https://vechirniy.kyiv.ua/uploads/2023/03/30/stacked_towels_brush_soap_cotton_swab_and_cosmetic_bottle_on_wooden.jpg"
                alt="photo"
                className="photo"
              ></img>
              <Link to="/link_three">
                <button className="btn">Перейти до категорії</button>
              </Link>
            </li>
          </ul>
          <ul className="flex ul-content">
            <li>
              <h2 className="title-text">Товари для чоловіків</h2>
              <img
                src="https://content1.rozetka.com.ua/goods/images/big/458055326.jpg"
                alt="photo"
                className="photo"
              ></img>
              <Link to="/link_for">
                <button className="btn">Перейти до категорії</button>
              </Link>
            </li>
            <li>
              <h2 className="title-text">Товари для жінок</h2>
              <img
                src="https://st5.depositphotos.com/10081550/65967/i/450/depositphotos_659673360-stock-photo-happy-young-woman-buying-new.jpg"
                alt="photo"
                className="photo"
              ></img>
              <Link to="/link_five">
                <button className="btn">Перейти до категорії</button>
              </Link>
            </li>
            <li>
              <h2 className="title-text">Товари для дітей</h2>
              <img
                src="https://st.depositphotos.com/1000459/2698/i/450/depositphotos_26983405-stock-photo-toys.jpg"
                alt="photo"
                className="photo"
              ></img>
              <Link to="/link_six">
                <button className="btn">Перейти до категорії</button>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="link_one" element={<Link_one />}></Route>
          <Route path="link_two" element={<Link_two />}></Route>
          <Route path="link_three" element={<Link_three />}></Route>
          <Route path="link_for" element={<Link_for />}></Route>
          <Route path="link_five" element={<Link_five />}></Route>
          <Route path="link_six" element={<Link_six />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
