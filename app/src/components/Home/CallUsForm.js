import React, { useState } from "react";
//components
import Confirm from "../Universal/Confirm";
//utils
import { motion } from "framer-motion";
import { variantsBtns } from "../../utils/framerMotion";

const CallUsForm = () => {
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = true; //validation
    if (validation) {
      // send to serv
      // if status 200 then setSuccess(true)
      // else setFail(true)
    }
  };
  const handleChange = (e) => setData(e.currentTarget.value);

  return (
    <div className="form-block w-form">
      <form
        id="email-form-2"
        name="email-form-2"
        data-name="Email Form 2"
        className="form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="callus_title">
          zostaw swój numer, zadzwonimy
        </label>
        <input
          type="text"
          className="callus_input w-input"
          maxLength={256}
          name="name-2"
          data-name="Name 2"
          placeholder
          id="name-2"
          value={data}
          onChange={handleChange}
        />
        <motion.div className="btn" variants={variantsBtns} whileHover="hover">
          <input type="submit" value="wyślij" className="callus_btn w-button" />
        </motion.div>
      </form>

      <Confirm success={success} fail={fail} />
    </div>
  );
};
export default CallUsForm;
