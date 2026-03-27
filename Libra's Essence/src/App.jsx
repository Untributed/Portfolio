import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import Promotions from "./components/Promotions.jsx";
import Perfumes from "./components/Perfumes.jsx";
import Manufacturers from "./components/Manufacturers.jsx";
import Sets from "./components/Sets.jsx";
import AdminDashboard from "./admindashboard/AdminDashboard.jsx";

import AboutUs from "./views/AboutUs.jsx";
import "./styles/App.css";

export default function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="perfumes" element={<Perfumes />} />
          <Route path="manufacturers" element={<Manufacturers />} />
          <Route path="sets" element={<Sets />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
        </Routes>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}