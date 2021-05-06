import React from "react";

const ContectItem = ({ label, content }) => {
  return (
    <h5 className="contact_addressitem">
      <span className="contacct_addresslabel" children={label} />
      <br />
      {content}
    </h5>
  );
};

export default ContectItem;
