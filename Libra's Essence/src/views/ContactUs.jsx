export default function ContactUs() {
    return (
        <div className="contact-us-wrapper">
            <div className="contacts-wrapper">
                <h1>Contact Us:</h1>
                <p>We’d love to hear from you! Whether you have questions, feedback, or need support, feel free to get in touch with us.</p>
                <p className="call-info">
                    *Calls are charged at standard operator rates for BTC 0700 landline numbers.</p>
                <div className="phone-span">
                    <span class="material-symbols-outlined">phone_in_talk</span>
                    <span className="about-us-span">Phone: (415) 555-0287;</span>
                </div>
                <div className="email-span">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="about-us-span">Email: info@lefragrance.com</span>
                </div>
                <span className="about-us-span">Address: 742 Willow Crest Avenue
                    <br /> Texas, 78702 United States</span>
                <p>Working Hours: Monday-Friday: 10:00 to 18:00</p>
            </div>
            <div className="contact-form-wrapper">
                <div className="contact-form">
                    <input className="box-1" type="text" />
                    <input className="box-2" type="text" />
                    <input className="box-3" type="text" />
                    <input className="box-4" type="text" />
                    <input className="box-5" type="text" />
                    <input className="box-6" type="text" />
                </div>
            </div>
        </div>
    )
}