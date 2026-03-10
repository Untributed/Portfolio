import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="community-nav">
                <ul className="icon-list-row">
                    <li><a className="footer-ext-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" > <FaFacebookF /></a></li>
                    <li><a className="footer-ext-link" href="https://x.com/home" target="_blank" rel="noopener noreferrer" > <FaXTwitter /></a></li>
                    <li><a className="footer-ext-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" > <FaInstagram /></a></li>
                    <li><a className="footer-ext-link FaYoutube" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" > <FaYoutube /></a></li>
                </ul>
            </div>
            <div className="footer-bottom-section">
                <div className="footer-links">
                    <ul className="footer-ul">
                        <div className="first-section">
                            <li className="first-heading">Store</li>
                            <li>About Us</li>
                            <li>Contacts</li>
                            <li>Our Stores</li>
                        </div>
                        <div className="second-section">
                            <li className="second-heading">Conditions</li>
                            <li>Private Policy</li>
                            <li>General Conditions</li>
                            <li>Declaration for Private Data</li>
                        </div>
                        <div className="third-section">
                            <li className="third-heading">Cookies Policy</li>
                            <li>Information</li>
                            <li>Delivery Policy</li>
                            <li>Payment Methods</li>
                        </div>
                        <div className="fourth-section">
                            <li className="fourth-heading">Return - Exchange Policy</li>
                            <li>Website Map</li>
                            <li>Blog</li>
                            <li>Our Contacts</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}