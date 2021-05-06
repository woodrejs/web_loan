import React from "react";
//utils
import { motion } from "framer-motion";
import { variantsGoUp, variantsBtns } from "../../utils/framerMotion";

const Hero = () => {
  return (
    <div id="home" className="mysection homesection">
      <div className="mycontainer homecontainer">
        <div className="home_contentbox">
          <motion.div
            className="home_content"
            initial="hidden"
            animate="visible"
            variants={variantsGoUp}
          >
            <h1 className="home_title">
              YOU WANT TO FREEING <br />
              YOURSELF FROM DEBTS
            </h1>
            <motion.div className="btn" variants={variantsBtns} whileHover="hover">
              <a href="#about" className="home_btn w-button" children="about us" />
            </motion.div>
          </motion.div>
        </div>
        <a href="#" className="sociallink">
          find us on
          <br /> facebook
        </a>
      </div>
    </div>
  );
};
export default Hero;
