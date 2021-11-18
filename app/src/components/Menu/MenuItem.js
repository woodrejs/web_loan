import React from "react";
//utils
import { motion } from "framer-motion";
import { variantsNavLink } from "../../utils/framerMotion";

const MenuItem = ({ path, name }) => {
  return (
    <motion.div variants={variantsNavLink} whileHover="hover">
      <a href={path} className="navlink" children={name} />
    </motion.div>
  );
};
export default MenuItem;
