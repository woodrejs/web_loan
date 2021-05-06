import React from "react";
//components
import CallUsForm from "../../components/Home/CallUsForm";
//utils
import { motion } from "framer-motion";
import { variantsGoUp } from "../../utils/framerMotion";
import { useInView } from "react-intersection-observer";

const CallUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="mysection callussection" ref={ref}>
      <motion.div
        className="mycontainer calluscontainer"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variantsGoUp}
      >
        <div className="callus_contentbox">
          <CallUsForm />
        </div>
      </motion.div>
    </div>
  );
};
export default CallUs;
