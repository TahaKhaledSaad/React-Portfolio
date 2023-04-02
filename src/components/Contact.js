import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

import "../css/style.css";

const Contact = () => {


  const myRef = useRef(null);

  // useEffect(() => {
  //   ScrollReveal().reveal(myRef.current,{
  //     // duration: 1000,
  //     // distance: '30px',
  //     // easing: 'ease-in-out',
  //     // origin: 'bottom',
  //     // reset: true,
  //   });
  // }, []);


  return (
    <section class="contact" id="contact" ref={myRef}>
      <h2 class="heading">
        Contact <span>Me!</span>
      </h2>

      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Full Name" />
        </div>
        <div class="input-box">
          <input type="number" placeholder="Mobile" />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" value="Send Message" class="btn" />
      </form>
    </section>
  );
};

export default Contact;
