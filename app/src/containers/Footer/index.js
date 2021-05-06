import React from "react";
//utils
import { motion } from "framer-motion";
import { variantsGoUp } from "../../utils/framerMotion";

const Footer = () => {
  return (
    <div className="footer">
      <motion.h5
        initial="hidden"
        animate="visible"
        variants={variantsGoUp}
        className="footer_copywriter"
      >
        © 2021 Maciej Szczepański
      </motion.h5>
    </div>
  );
};
export default Footer;
