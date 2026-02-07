import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import Promotions from "./components/Promotions.jsx";
import Perfumes from "./components/Perfumes.jsx";
import Manufacturers from "./components/Manufacturers.jsx";
import Sets from "./components/Sets.jsx";
import "./styles/App.css";

export default function App() {

  return (
    <>
      <div className="searchbox-container">
        <Link to="/"><img className="logo" src="./src/assets/logo.jpg" alt="Logo" /></Link>

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
          <Link to="new-arrivals"><li>New Arrivals</li></Link>
          <Link to="promotions"><li>Promotions</li></Link>
          <Link to="perfumes"><li>Perfumes</li></Link>
          <Link to="manufacturers"><li>Manufacturers</li></Link>
          <Link to="sets"><li>Sets</li></Link>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new-arrivals" element={<NewArrivals />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="perfumes" element={<Perfumes />} />
        <Route path="manufacturers" element={<Manufacturers />} />
        <Route path="sets" element={<Sets />} />
      </Routes>
    </>
  );
}