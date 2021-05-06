import React from "react";
//assets
import HamburgerIcon from "../../assets/icons/HAMBURGER_ICON.svg";

const Hamburger = () => {
  return (
    <div className="hamburgerbox">
      <img src={HamburgerIcon} loading="lazy" alt className="hamburger" />
    </div>
  );
};
export default Hamburger;
