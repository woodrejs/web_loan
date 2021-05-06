import React from "react";
//utils
import { motion } from "framer-motion";
import { variantsGoUp } from "../../utils/framerMotion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="footer">
      <motion.h5
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variantsGoUp}
        className="footer_copywriter"
      >
        © 2021 Maciej Szczepański
      </motion.h5>
    </div>
  );
};
export default Footer;
