import React from "react";

const Confirm = ({ success, fail }) => {
  return (
    <>
      {success && (
        <div className="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
      )}
      {fail && (
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      )}
    </>
  );
};
export default Confirm;
