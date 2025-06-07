// Importing dependencies
import "./about.css";
import BonusCard from "../05-Bonus Card/BonusCard";
import SaveMoney from "../../assets/icons/save_money.svg";
import Reward from "../../assets/icons/reward.svg";
import Travel from "../../assets/icons/travel.svg";

const About = () => {
  return (
    <div id="about" className="about_cont">
      <div className="info_comp">
        <h1>
          Why to <span>travel</span> with us?
        </h1>
        <p>
          Ambitious about your next adventure but sick of saving money? End up
          sneaking into those savings <br /> because well.. You’re bored? Lost
          motivation? You don’t feel the funds are growing fast enough? Saving
          <br />
          just sucks? Trasave has introduced an epic new way to reward you for
          your savings for travel
        </p>
      </div>
      <div className="info_bonus">
        <BonusCard
          img={SaveMoney}
          title={"Save money"}
          info={"Invest in trasave securily for future"}
        />
        <BonusCard
          img={Reward}
          title={"Earn rewards"}
          info={"Earn rewards and track your money"}
        />
        <BonusCard
          img={Travel}
          title={"Travel"}
          info={"Use this money for your travelling"}
        />
      </div>
    </div>
  );
};

export default About;
