import "../css/style.css";
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";
import trans3 from "../images/trans3.png";

const Home = () => {
  // typed of Trick ========
  const typedRef = useRef(null);

  useEffect(() => {
    const typedOptions = {
      strings: ["Frontend Developer !", "UI/UX Designer !"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, typedOptions);

    return () => {
      typed.destroy();
    };
  }, []);
  // ========

  return (
    <section class="home" id="home">
      <div class="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Taha Khaled</h1>
        <h3>
          {/* typed of Trick  */}
          I'm a <span class="multiple-text" ref={typedRef}></span>
        </h3>
        <p>
          Front-end developer proficient in HTML, CSS, and
          JavaScript, React JS.
        </p>
        <div class="social-media">
          <a href="https://www.facebook.com/taha.khaled.315213">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="http://api.whatsapp.com/send?phone=0201115155126">
            <i class="bx bxl-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/taha-khaled-83a426221/">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <a href="../images/ITI-Certif.pdf" class="btn" download>
          Download CV
        </a>
      </div>

      <div class="home-img">
        <img src={trans3} alt="" />
      </div>
    </section>
  );
};

export default Home;
