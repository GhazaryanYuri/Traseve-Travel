// Importing dependecies
import Button from "../03-Button/Button";
import "./banner.css";

const Banner = ({
  img,
  title,
  subtitle,
  reversed,
  id,
  button,
  img_className,
}) => {
  return (
    <div
      id={id ? id : ""}
      className={reversed ? "banner_cont reversed" : "banner_cont"}
    >
      <div className="info">
        <hr className="horizontal_row" />

        <h1>{title}</h1>
        <p>{subtitle}</p>
        {button && <Button button_inner={"Let’s save"} />}
      </div>
      <img
        src={img}
        alt="Banner IMG"
        className={img_className ? "banner_img" : ""}
      />
    </div>
  );
};

export default Banner;
