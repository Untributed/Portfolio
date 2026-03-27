export default function AboutUs() {
    return (
        <div className="about-us-wrapper">
            <h1>Contacts:</h1>
            <p>You have a question regarding our online store?</p>
            <p>You can write to us:</p>
            <div className="phone-span">
                 <span class="material-symbols-outlined">phone_in_talk</span>
                 <span className="about-us-span">Phone: 088 2312 123;</span>
            </div>
            <div className="email-span">
                <span className="material-symbols-outlined">mail</span>
                <span className="about-us-span">Email: info@librasesssence.com</span>
            </div>
            <span className="about-us-span">Address: Sofia, Tsarigradsko shose 41</span>
            <p>Working Hours: Monday-Friday: 10:00 to 18:00</p>
        </div>
    )
}