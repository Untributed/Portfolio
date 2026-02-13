import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
export default function Footer() {
    return (
        <>
            <div className="footer-wrapper">
                <div className="social-icons-wrapper">
                    <ul className="social-icons">
                        <li><a className="facebook-icon" href="https://www.facebook.com/" target="_blank"> <FaFacebookF /></a></li>
                        <li><a className="x-icon" href="https://x.com/home" target="_blank"> <FaXTwitter /></a></li>
                        <li><a className="instagram-icon" href="https://www.instagram.com/" target="_blank"> <FaInstagram /></a></li>
                        <li><a className="youtube-icon" href="https://www.youtube.com/" target="_blank"> <FaYoutube /></a></li>
                    </ul>
                </div>
                <div className="footer-bottom-section">
                    <div className="footer-links">
                        <ul className="footer-ul">
                            <li>Store</li>
                            <li>About Us</li>
                            <li>Contacts</li>
                            <li>Our Stores</li>
                            <li>Conditions</li>
                            <li>Private Policy</li>
                            <li>General Conditions</li>
                            <li>Declaration for Private Data</li>
                            <li>Cookies Policy</li>
                            <li>Information</li>
                            <li>Delivery Policy</li>
                            <li>Payment Methods</li>
                            <li>Return - Exchange Policy</li>
                            <li>Website Map</li>
                            <li>Blog</li>
                            <li>Our Contacts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}