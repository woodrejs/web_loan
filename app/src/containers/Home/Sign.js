import React from "react";
//utils
import { motion } from "framer-motion";
import { variantsGoUp, variantsBtns } from "../../utils/framerMotion";
import { useInView } from "react-intersection-observer";

const Sign = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="mysection signsection">
      <div className="mycontainer signcontainer">
        <div className="w-layout-grid sign_gridbox">
          <div className="sign_imgbox" />
          <div className="sign_contentbox">
            <motion.div
              ref={ref}
              className="sign_content"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variantsGoUp}
            >
              <h3 className="sign_title">It is a long established fact that</h3>
              <p className="sign_text">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like
                readable English.
              </p>
              <motion.div className="btn" variants={variantsBtns} whileHover="hover">
                <a
                  href="#contact"
                  className="sign_btn w-button"
                  children="napisz do nas"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sign;
