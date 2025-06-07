// Importing dependencies
import "./info_banner.css";

const InfoBanner = ({ id, title, content_1, content_2, banner_bg }) => {
  return (
    <div id={id ? id : ""} className="info_banner_cont">
      <div className="info">
        <hr className="horizontal_row" />

        <h1>{title}</h1>
      </div>
      <div className="content">
        <p className="content_1">{content_1}</p>
        <p className="content_2">{content_2}</p>
      </div>
    </div>
  );
};

export default InfoBanner;
