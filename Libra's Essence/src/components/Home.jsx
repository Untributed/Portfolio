import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { FaStar } from "react-icons/fa6";

export default function Home() {

    return (
        <>
            <main className="products-catalog-wrapper">
                <div className="product-card-wrapper">
                    <div className="product-card">
                        <ul className="products-ul">
                            <li className="azure-li">
                                <div className="azure-fragrance-img">
                                    <img className="azure-fragrance" src="./src/assets/azure.png" alt="Product" />
                                </div>
                                <div className="azure-name-div">
                                    <a href="product">Azure Whisper</a>
                                </div>
                                <div className="rating">
                                    <a className="star-icon"> <FaStar /></a>
                                    <a className="star-icon"> <FaStar /></a>
                                    <a className="star-icon"> <FaStar /></a>
                                    <a className="star-icon"> <FaStar /></a>
                                    <a className="star-icon"> <FaStar /></a>
                                    <span className="rating"> (5.0)</span>
                                </div>
                                <span className="price-span">
                                    19$
                                </span>
                                <div className="buy-button">
                                    Buy
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

        </>
    );
}