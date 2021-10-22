import React from "react";
import "./Contact.css";
const Contactus = "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"

function Contact() {

  return (
    <div>
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${Contactus})` }}
        ></div>
        <div className="rightSide">
          <h1> Contact Us</h1>

          <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit"> Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
