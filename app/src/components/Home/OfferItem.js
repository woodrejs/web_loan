import React from "react";

const OfferItem = ({ name }) => {
  return (
    <div className="offer_product">
      <h5 className="offer_producttitle" children={name} />
    </div>
  );
};
export default OfferItem;
