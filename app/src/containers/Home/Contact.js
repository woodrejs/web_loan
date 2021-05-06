import React from "react";
//components
import ContactForm from "../../components/Home/ContactForm";
import ContectItem from "../../components/Home/ContactItem";
//utils
import { motion } from "framer-motion";
import { variantsGoUp } from "../../utils/framerMotion";

const Contact = () => {
  return (
    <div id="contact" className="mysection contactsection">
      <div className="mycontainer contactcontainer">
        <motion.div
          className="contact_contentbox"
          initial="hidden"
          animate="visible"
          variants={variantsGoUp}
        >
          <h3 className="contact_title">
            It is a long established fact that a reader will
          </h3>
          <p className="contact_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
            enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros
            dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
            et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
        </motion.div>
        <motion.div
          className="w-layout-grid contact_gridbox"
          initial="hidden"
          animate="visible"
          variants={variantsGoUp}
        >
          <ContactForm />
          <div className="contat_addressbox">
            <ContectItem label="Adres" content="ul. Grabiszynska 105/58 51-156 Wrocław" />
            <ContectItem label="Telefon" content="562-563-536, 526-874-596" />
            <ContectItem label="Email" content="loremipsum@gmail.com" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
//  id="w-node-_9bbbe160-a146-7730-414e-5b09c5ff3433-2a37df68"
