import React from "react";
//components
import OfferItem from "../../components/Home/OfferItem";
//utils
import { motion } from "framer-motion";
import { variantsGoUp } from "../../utils/framerMotion";

const Offer = () => {
  return (
    <div id="offer" className="mysection offer_section">
      <div className="mycontainer offercontainer">
        <motion.div
          className="offer_contentbox"
          initial="hidden"
          animate="visible"
          variants={variantsGoUp}
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
