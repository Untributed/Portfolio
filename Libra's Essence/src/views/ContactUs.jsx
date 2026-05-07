export default function ContactUs() {
    return (
        <div className="contact-us-wrapper">
            <h1>Contact Us:</h1>
            <p>For all inquiries</p>
            <div className="phone-span">
                <span class="material-symbols-outlined">phone_in_talk</span>
                <span className="about-us-span">Phone: (415) 555-0287;</span>
            </div>
            <div className="email-span">
                <span className="material-symbols-outlined">mail</span>
                <span className="about-us-span">Email: info@libras_essence.com</span>
            </div>
            <span className="about-us-span">Address: 742 Willow Crest Avenue
                <br /> Texas, 78702 United States</span>
            <p>Working Hours: Monday-Friday: 10:00 to 18:00</p>
        </div>
    )
}