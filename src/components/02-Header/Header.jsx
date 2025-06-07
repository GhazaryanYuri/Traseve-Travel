// Importing dependencies
import "./header.css";
import Button from "../03-Button/Button";
import header_project_status_img from "../../assets/images/header_projects_status.png";
import figma from "../../assets/icons/figma.svg";
import photoshop from "../../assets/icons/photoshop.svg";
import illustrator from "../../assets/icons/illustrator.svg";
import header_bg from "../../assets/images/header_bg.png";

const Header = () => {
  return (
    <header id="home">
      <h1>
        <span>Saving</span> YOUR MONEY FOR TRAVEL THROUGH TRAVEL FUND
      </h1>
      <h3>
        Save your money for travel securely and explore the whole world with
        trasave, we provide you the best travel services.
      </h3>

      <div className="buttons">
        <Button button_inner={"Save now"} />
        <Button button_inner={"UI/UX Case Study"} />
      </div>

      <div className="info">
        <div className="technologies">
          <h5>
            <img src={figma} alt="Figma Icon" /> Figma
          </h5>
          <h5>
            <img src={photoshop} alt="Photoshop Icon" /> Photoshop
          </h5>
          <h5>
            <img src={illustrator} alt="Illustrator Icon" /> Illustrator
          </h5>
        </div>
        <img src={header_project_status_img} alt="Header Projects Status Img" />
      </div>

      <img src={header_bg} alt="Header Backgrou Img" className="header_bg" />
    </header>
  );
};

export default Header;
