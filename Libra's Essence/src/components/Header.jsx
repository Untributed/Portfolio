import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.jpg";

export default function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-sub-wrapper">
                <div className="searchbox-container">
                    <Link to="/"><img className="logo" src={LogoImg} alt="Logo" /></Link>
                    <div className="input-wrapper">
                        <input className="searchbox" id="searchbox" type="text" placeholder='Search' />
                        <span className="material-symbols-outlined search-icon">search</span>
                    </div>

                    <div className="admin-dashboard-wrapper">
                        <ul className="admin-dashboard-ul">
                            <Link to="admin-dashboard">
                                <li className="admin-dasboard-li">
                                    <a href="">Admin Dashboard</a>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className="header-icons">
                        <span className="material-symbols-outlined icon-person">person</span>
                        <span className="material-symbols-outlined shopping_cart">shopping_cart</span>
                    </div>
                </div>


            </div>
            <div className="nav-links-wrapper">
                <ul className="nav-ul-links">
                    <div className="new-arrivals"><Link to="new-arrivals"><li>New Arrivals</li></Link></div>
                    <div className="promotions"><Link to="promotions"><li>Promotions</li></Link></div>
                    <div className="perfumes"><Link to="perfumes"><li>Perfumes</li></Link></div>
                    <div className="manufacturers"><Link to="manufacturers"><li>Manufacturers</li></Link></div>
                    <div className="sets"><Link to="sets"><li>Sets</li></Link></div>
                </ul>
            </div>
        </div>
    );
}