import "../../../styles/contact/ContactForm.css";
import { CiClock2, CiLocationOn, CiMail } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="contact__form__container">
      <div>
        <div className="address__container">
          <p>Address</p>
          <div>
            <CiLocationOn className="icon" />
            <p>725 5th Ave, New York, NY 10022, USA</p>
          </div>
        </div>
        <div className="address__container">
          <p>Phones</p>
          <div>
            <PiPhoneThin className="icon" />
            <p>712-339-9294</p>
          </div>
        </div>
        <div className="address__container">
          <p>Address</p>
          <div>
            <CiMail className="icon" />
            <p>info@decovista.com</p>
          </div>
        </div>
        <div className="address__container">
          <p>Working Hours</p>
          <div>
            <CiClock2 className="icon" />
            <p>Mon-Fri: 10:00 - 18:00</p>
          </div>
        </div>
        <div className="follow__container">
          <p>Follow Us</p>
          <div className="socials__container">
            <FaFacebook className="icon" />
            <FaWhatsapp className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
      <div>
        <p className="form__header">Send Your Question</p>
        <form onSubmit="">
          <div className="input__container">
            <label htmlFor="name">Your Name</label>
            <input type="text" className="input__text" />
          </div>
          <div className="input__container">
            <label htmlFor="email">Your Email</label>
            <input type="email" className="input__text" />
          </div>
          <div className="input__container">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" cols="50" rows="10" className="textarea__input"></textarea>
          </div>
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
