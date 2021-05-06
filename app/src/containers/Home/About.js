import React from "react";
//utils
import { motion } from "framer-motion";
import { variantsGoUp } from "../../utils/framerMotion";

const About = () => {
  return (
    <div id="about" className="mysection aboutsection">
      <div className="mycontainer aboutcontainer">
        <motion.div
          className="about_contentbox"
          initial="hidden"
          animate="visible"
          variants={variantsGoUp}
        >
          <h3 className="about_title">
            It is a long established fact that a reader will
          </h3>
          <p className="paragraph">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model text, and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
