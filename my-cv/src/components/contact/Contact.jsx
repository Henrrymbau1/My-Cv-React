import React from "react";
import "./contact.css";
import { useRef, useContext, useState } from "react";
import { ThemeContext } from "../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
      e.preventDefault();
  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss opportunities</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/126/126509.png"
                alt="tlf-logo"
                className="c-icon"
              />
              + 34 777 888 999
            </div>
            <div className="c-info-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/80/80599.png"
                alt="email-logo"
                className="c-icon"
              />
              henrrymbaudev@gmail.com
            </div>
            <div className="c-info-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                alt="adrees-logo"
                className="c-icon"
              />
              Calle
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's the Porpouse of the company?</b> Get in touch. Always great to
            talk for future projects align the...
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
