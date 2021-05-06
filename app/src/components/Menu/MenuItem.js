import React from "react";
//utils
import { motion } from "framer-motion";
import { variantsOpacity } from "../../utils/framerMotion";

const MenuItem = ({ path, name }) => {
  return (
    <motion.div initial="hidden" animate="visible" whileHover={{ y: 5 }}>
      <a href={path} className="navlink" children={name} variants={variantsOpacity} />
    </motion.div>
  );
};
export default MenuItem;
