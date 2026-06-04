export default function OurStores() {
    return (
        <div className="our-stores-page-wrapper">
            <div className="our-stores-wrapper">
                <div className="google-maps-location">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6891.806093176774!2d-97.71989083369665!3d30.268343540125855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4e8af347b4b%3A0x706ae40b8038434c!2sGeorge%20Washington%20Carver%20Museum!5e0!3m2!1sen!2sbg!4v1780579311633!5m2!1sen!2sbg"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="our-stores-stores-section">
                    <div className="our-stores-h2-p">
                        <h2>1165 Angelina Street</h2>
                        <p>Austin, Texas</p>
                        <p>1165 Angelina St, Austin, TX 78702, USA</p>
                    </div>
                    <div className="our-store-phone-span">
                        <span className="material-symbols-outlined">phone_in_talk</span>
                        <span className="our-stores-phone">(415) 555-0287</span>
                    </div>
                    <div className="our-store-email-span">
                        <span className="material-symbols-outlined">mail</span>
                        <span className="our-stores-email">info@lefragrance.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}