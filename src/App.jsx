// Importing dependencies
import "./App.css";
import Navbar from "./components/01-Navbar/Navbar";
import Header from "./components/02-Header/Header";
import About from "./components/04-About/About";
import Banner from "./components/06-Banner/Banner";
import Footer from "./components/08-Footer/Footer";

// Importing images
import Banner_img_1 from "./assets/images/banner_img_1.png";
import Banner_img_2 from "./assets/images/banner_img_2.png";
import Banner_img_3 from "./assets/images/banner_img_3.png";
import InfoBanner from "./components/07-Info Banner/InfoBanner";
import Info_banner_bg from "./assets/images/info_banner_bg.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Banner
        img={Banner_img_1}
        title={"Save and get Travel Fund Rewards"}
        subtitle={
          "Trasave travel fund is a fun and secure way to save. Not only can you customise your own travel journey but also earn rewards while travelling by uploading videos of the destination. Also it gives cool tips to encourage more savings and  we will also reward you with epic cool gifts when you hit saving goals."
        }
        id={"save"}
      />
      <Banner
        img={Banner_img_2}
        title={"Find the best places of the world"}
        subtitle={
          "We at trasave provide ou the best destination for travel, go and find new places and add to your travel list and go for travel later and enjoy, use your saved money later without thinking about money"
        }
        id={"travel"}
        reversed={true}
      />
      <Banner
        img={Banner_img_3}
        title={"Save now and earn cashback upto 250"}
        subtitle={"We at trasave provide ou the best destination for travel, "}
        img_className={true}
        button={true}
        id={"experience"}
      />
      <InfoBanner
        id={"wallet"}
        title={
          "Save your travel money in Trasave and get top grade security with trasave"
        }
        content_1={
          "There are so many benefits of travelling with Trasave. Not only do we provide you with an awesome digital travel solution , an awesome travel app, but we also make it super easy and fun for you to store, save and move your travel money."
        }
        content_2={
          "As well as saving money, the TRASAVE travel fund is a good way to track your travel money. Tracking Expenses is important when travelling as you don’t want to be stuck in the middle of your journey budgeting your travel. We created the travel fund so you can store all your travel money and then track your money from your travel fund expense tracker."
        }
        banner_bg={Info_banner_bg}
      />
      <Footer />
    </>
  );
};

export default App;
