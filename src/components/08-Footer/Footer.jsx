// Importing dependencies
import "./footer.css";

// Importing images
import Treseve from "/website_icon.svg";

// Importing Icons for social links
import Instagram from "../../assets/icons/logo-instagram.svg";
import Linkedin from "../../assets/icons/logo-linkedin.svg";
import Facebook from "../../assets/icons/logo-facebook.svg";
import Twitter from "../../assets/icons/logo-twitter.svg";
import Button from "../03-Button/Button";

const Footer = () => {
  const logos = [Instagram, Linkedin, Facebook, Twitter];

  return (
    <footer>
      <div className="content">
        <div className="company_cont">
          <img src={Treseve} alt="Treseve Logo" className="traseve_logo" />
          <p>TRASAVE travel fund is a good way to track your travel money.</p>
          <ul>
            {logos.map((logo, index) => (
              <li key={index}>
                <a href="#">
                  <img src={logo} alt="Social Logo" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_about_cont">
          <h3 className="title">About</h3>
          <ul>
            <li>
              <a href="#">Technical Info</a>
            </li>
            <li>
              <a href="#">Other Products</a>
            </li>
          </ul>
        </div>
        <div className="footer_contact_cont">
          <h3 className="title">Contact US</h3>
          <ul>
            <li>
              <p>Yerevan, Armenia</p>
            </li>
            <li>
              <a href="#">+374 91-14-08-79</a>
            </li>
            <li>
              <a href="#">yuranar12@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="mail_cont">
          <h3 className="title">
            Subscribe <span>Newsletter</span>
          </h3>

          <div className="form">
            <input type="text" id="message" placeholder="Enter your email" />
            <Button button_inner={"Subscribe"} />
          </div>
        </div>
      </div>
      <h3 className="rights">
        Copyright {new Date().getFullYear()} Ghazaryan Developer. All right
        reserved
      </h3>
    </footer>
  );
};

export default Footer;
