import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import "./styles/App.css";

export default function App() {

  return (
    <>
      <div className="searchbox-container">
        <img className="logo" src="./src/assets/logo.jpg" alt="Logo" />

        <div className="input-wrapper">
          <input className="searchbox" type="text" placeholder='Search' />
          <span className="material-symbols-outlined search-icon">search</span>
        </div>
        <div className="user-icons">
          <span class="material-symbols-outlined icon-person">person</span>
          <span class="material-symbols-outlined shopping_cart">shopping_cart</span>
        </div>
      </div>

      <div className="nav-container">
        <ul className="nav-list">
          <li>New Arrivals</li>
          <li>Promotions</li>
          <li>Perfumes</li>
          <li>Manufacturers</li>
          <li>Sets</li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new-arrivals" element={<NewArrivals />} />
      </Routes>
    </>
  )
}