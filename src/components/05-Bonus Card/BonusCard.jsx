// Importing dependencies
import "./bonus_card.css";

const BonusCard = ({ img, title, info }) => {
  return (
    <div className="bonus_card">
      <img src={img} alt="Bonus IMG here" />
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
};

export default BonusCard;
