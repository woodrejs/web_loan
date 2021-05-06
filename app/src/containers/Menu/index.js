import React, { useState, useEffect } from "react";
//components
import MenuItem from "../../components/Menu/MenuItem";
import Hamburger from "../../components/Menu/Hamburger";
//assets
import LogoIcon from "../../assets/icons/LOGO1.svg";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (bool) => setIsScrolled(bool);

  useEffect(() => scrollDetection(handleScroll, isScrolled), []);

  return (
    <div
      className="mysection navsection"
      style={{
        backgroundColor: isScrolled ? "#72A5BA" : "unset",
      }}
    >
      <div className="mycontainer navcontainer">
        <a href="#home">
          <img src={LogoIcon} loading="lazy" alt className="logo" />
        </a>

        <div className="nav">
          <MenuItem path="#home" name="start" />
          <MenuItem path="#about" name="o nas" />
          <MenuItem path="#offer" name="oferta" />
          <MenuItem path="#contact" name="kontakt" />
        </div>
        <Hamburger />
      </div>
    </div>
  );
};
export default Menu;

//functions
function scrollDetection(handler, state) {
  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const currentWindowScroll = window.scrollY;

    currentWindowScroll > windowHeight && !state ? handler(true) : handler(false);
  });
}
