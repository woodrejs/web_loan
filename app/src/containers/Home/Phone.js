import React from "react";
//assets
import PhoneIcon from "../../assets/icons/phone_icon.svg";
//utils
import { motion } from "framer-motion";
import { variantsGoUp } from "../../utils/framerMotion";
import { useInView } from "react-intersection-observer";

const Phone = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="mysection phonesection">
      <div className="mycontainer phonecontainer">
        <div className="w-layout-grid grid">
          <div className="phone_imgbox" />
          <motion.div
            ref={ref}
            className="phone_contentbox"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variantsGoUp}
          >
            <div className="phone_content">
              <img
                src={PhoneIcon}
                loading="lazy"
                width={50}
                alt="phone_icon"
                className="image"
              />
              <p className="phone_text">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
              <h2 className="phone_number">+48 536 987 123</h2>
            </div>
          </motion.div>
          <div className="phone_imgbox phone_imgbox--right" />
        </div>
      </div>
    </div>
  );
};
export default Phone;
