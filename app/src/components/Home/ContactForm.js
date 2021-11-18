import React, { useState } from "react";
//components
import Confirm from "../Universal/Confirm";
//utils
import { motion } from "framer-motion";
import { variantsBtns } from "../../utils/framerMotion";

const ContactForm = () => {
  const [data, setData] = useState({ name: null, email: null, message: null });
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
  const handleChange = (e) => {
    const state = { ...data };
    state[e.currentTarget.name] = e.currentTarget.value;

    setData(state);
  };

  return (
    <div className="contact_formbox">
      <div className="w-form">
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          onSubmit={handleSubmit}
        >
          <TextInput name="name" handler={handleChange} />
          <TextInput name="email" handler={handleChange} />
          <TextArea name="message" handler={handleChange} />
          <motion.div className="btn" variants={variantsBtns} whileHover="hover">
            <input
              type="submit"
              value="Wyślij"
              className="callus_btn contact_btn w-button"
            />
          </motion.div>
        </form>

        <Confirm success={success} fail={fail} />
      </div>
    </div>
  );
};
export default ContactForm;

const TextInput = ({ name, handler }) => {
  const placeholder = name === "name" ? "Imię i Nazwisko" : "Adres Email";
  return (
    <>
      <label htmlFor={name} className="contact_formlabel" children={placeholder} />
      <input
        type="text"
        className="contact_forminput w-input"
        maxLength={256}
        name={name}
        data-name={name}
        placeholder={placeholder}
        id={name}
        required
        onChange={handler}
      />
    </>
  );
};
const TextArea = ({ name, handler }) => {
  return (
    <>
      <label className="contact_formlabel" children="Wiadomość" htmlFor={name} />
      <textarea
        placeholder="Wiadomość"
        maxLength={5000}
        id={name}
        name={name}
        className="contact_forminput w-input"
        onChange={handler}
      />
    </>
  );
};
