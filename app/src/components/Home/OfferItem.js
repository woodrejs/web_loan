import React from "react";
//utils
import { motion } from "framer-motion";
import { variantsItem } from "../../utils/framerMotion";

const OfferItem = ({ name }) => {
  return (
    <motion.div className="offer_product" variants={variantsItem}>
      <h5 className="offer_producttitle" children={name} />
    </motion.div>
  );
};
export default OfferItem;
