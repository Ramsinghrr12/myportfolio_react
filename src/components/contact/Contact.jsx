import React from "react";
import "./Contact.css";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Web3Forms access key
    formData.append("access_key", "6cd2a7ab-69bd-49d0-9e30-bb34f4ad91cd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();

      if (result.success) {
        console.log("Form submitted successfully", result);
        alert("Form submitted successfully!");
      } else {
        console.error("Form submission failed", result);
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an issue submitting the form. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src="" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            "I am passionate about both front-end and back-end development,
            always ready to take on new challenges and provide innovative
            solutions. Whether you're looking to create visually stunning
            interfaces or build robust server-side applications, I am here to
            help. If you have any questions or need assistance with your
            project, feel free to reach out. Let’s collaborate to turn your
            ideas into reality!"
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="/img/mail.png" alt="Mail Icon" />
              <p>ramsinghnayak5559@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/img/call.png" alt="Call Icon" />
              <p>+91 9969833925</p>
            </div>
            <div className="contact-detail">
              <img src="/img/location.png" alt="Location Icon" />
              <p>Rgukt Basar, Telangana</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" required />

          <label htmlFor="message">Write Your Message here</label>
          <textarea name="message" rows={8} placeholder="Enter Your Message" required></textarea>

          <button className="contact-submit" type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
    


