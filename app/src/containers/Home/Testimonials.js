import React from "react";
//components
import Testimonial from "../../components/Home/Testimonial";
//utils
import { motion } from "framer-motion";
import { variantsContainer } from "../../utils/framerMotion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className="mysection testimonialssection">
      <div className="mycontainer testimonialscontainer">
        <motion.div
          ref={ref}
          className="w-layout-grid testimonials_gridbox"
          variants={variantsContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
