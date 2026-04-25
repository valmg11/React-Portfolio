function Contact() {
    return (
       <>
        <div>
            <h2>Contact</h2>
        </div>
        <div className="contactDiv" id="contact">
            <div>
                <a href="https://www.linkedin.com/in/valentina-gandolfo-126046306/">LinkedIn</a> <br></br>
                <a href="https://ucf.joinhandshake.com/profiles/5gen4z">Handshake</a>
                <p>Contact me!</p>
                <div className="contact1">
                    <input placeholder="Name"></input>
                    <input placeholder="Email"></input>
                </div>
                <div className="contact2">
                    <input placeholder="Message"></input>
                    <button className="submit">Submit</button>

                </div>
            </div>
            {/* <div>
                <p>block 2</p>
                <p>tsuki</p>
            </div> */}
        </div>
        </>
    );
}

export default Contact;