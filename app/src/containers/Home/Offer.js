import React from "react";
//components
import OfferItem from "../../components/Home/OfferItem";
//utils
import { motion } from "framer-motion";
import { variantsContainer } from "../../utils/framerMotion";
import { useInView } from "react-intersection-observer";

const Offer = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div id="offer" className="mysection offer_section">
      <div className="mycontainer offercontainer">
        <motion.div
          ref={ref}
          custom={0.1}
          className="offer_contentbox"
          variants={variantsContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="offer_title">It is a long established fact that</h3>
          <div className="w-layout-grid offer_productsbox">
            <OfferItem name="Product name" />
            <OfferItem name="Product name" />
            <OfferItem name="Product name" />
            <OfferItem name="Product name" />
            <OfferItem name="Product name" />
            <OfferItem name="Product name" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Offer;
