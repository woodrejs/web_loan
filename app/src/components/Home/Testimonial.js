import React from "react";

const Testimonial = ({ user, content }) => {
  return (
    <div className="testimonials_contentbox">
      <p className="testimonial_title" children={content} />
      <h5 className="testimonial_signature" children={user} />
    </div>
  );
};
export default Testimonial;
