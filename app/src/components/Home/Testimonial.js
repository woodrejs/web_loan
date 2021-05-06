import React from "react";
//utils
import { motion } from "framer-motion";
import { variantsItem } from "../../utils/framerMotion";

const Testimonial = ({ user, content }) => {
  return (
    <motion.div className="testimonials_contentbox" variants={variantsItem}>
      <p className="testimonial_title" children={content} />
      <h5 className="testimonial_signature" children={user} />
    </motion.div>
  );
};
export default Testimonial;
