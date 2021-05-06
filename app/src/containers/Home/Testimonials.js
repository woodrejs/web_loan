import React from "react";
//components
import Testimonial from "../../components/Home/Testimonial";
//utils
import { motion } from "framer-motion";
import { variantsGoUp } from "../../utils/framerMotion";

const Testimonials = () => {
  return (
    <div className="mysection testimonialssection">
      <div className="mycontainer testimonialscontainer">
        <motion.div
          className="w-layout-grid testimonials_gridbox"
          initial="hidden"
          animate="visible"
          variants={variantsGoUp}
        >
          <Testimonial
            user="user name"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          />
          <Testimonial
            user="user name"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          />
          <Testimonial
            user="user name"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Testimonials;
