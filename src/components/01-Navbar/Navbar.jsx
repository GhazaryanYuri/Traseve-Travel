// Importing dependencies
import "./navbar.css";
import Navbar_Icon from "/website_icon.svg";
import { useEffect, useState } from "react";
import Button from "../03-Button/Button";

const Navbar = () => {
  // Dynamic content variables
  const [navbar_links, setNavbarLinks] = useState(null);
  const [active_link, setActiveLink] = useState("#home");
  const [mobile_navbar_status, setMobileNavbarStatus] = useState(false);

  useEffect(() => {
    async function Navbar_Data() {
      try {
        const resp = await fetch("/data/navbar.json");
        const data = await resp.json();

        setNavbarLinks(data.links);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    Navbar_Data();
  }, []);

  return (
    <div className="navbar_cont">
      <img src={Navbar_Icon} alt="Traseve Travel Icon" />
      <div className="links_cont">
        <div
          onClick={() =>
            mobile_navbar_status
              ? setMobileNavbarStatus(false)
              : setMobileNavbarStatus(true)
          }
          className={
            mobile_navbar_status
              ? "burger_menu_icon active"
              : "burger_menu_icon"
          }
        >
          <span> </span>
          <span> </span>
          <span> </span>
        </div>

        <ul
          className={mobile_navbar_status ? "active_links" : "inactive_links"}
        >
          {navbar_links?.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className={active_link === link.url ? "active" : ""}
                onClick={() => {
                  setActiveLink(link.url);
                  setMobileNavbarStatus(false);
                }}
              >
                {link.content}
              </a>
            </li>
          ))}
          <li>
            <Button button_inner={"Contact Us"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
