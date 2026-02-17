import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="header-wrapper">
            <div className="searchbox-container">
                <Link to="/"><img className="logo" src="./src/assets/logo.jpg" alt="Logo" /></Link>

                <div className="input-wrapper">
                    <input className="searchbox" id="searchbox" type="text" placeholder='Search' />
                    <span className="material-symbols-outlined search-icon">search</span>
                </div>
                <div className="header-icons">
                    <span className="material-symbols-outlined icon-person">person</span>
                    <span className="material-symbols-outlined shopping_cart">shopping_cart</span>
                </div>
            </div>

            <div className="nav-links-wrapper">
                <ul className="nav-ul-links">
                    <Link to="new-arrivals"><li>New Arrivals</li></Link>
                    <Link to="promotions"><li>Promotions</li></Link>
                    <Link to="perfumes"><li>Perfumes</li></Link>
                    <Link to="manufacturers"><li>Manufacturers</li></Link>
                    <Link to="sets"><li>Sets</li></Link>
                </ul>
            </div>
        </div>
    );
}