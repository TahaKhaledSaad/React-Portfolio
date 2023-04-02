import "../css/style.css";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import js1 from "../images/js1.png";
import js2 from "../images/js2.png";
import little from "../images/little.png";

const Portfolio = () => {
  return (
    <section class="portfolio" id="portfolio">
      <h2 class="heading">
        Latest <span>Projects</span>
      </h2>
      <p class="alarm">
        All these projects were implemented by myself - Alhamdulillah - click to
        see!
      </p>
      <div class="portfolio-container">
        
        {/* <!-- box 1 --> */}
        <div class="portfolio-box">
          <img src={project1} alt="" />
          <div class="portfolio-layer">
            <h4>Agriculture</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              fuga.
            </p>
            <a href="https://tahakhaledsaad.github.io/Project-01/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        {/* <!-- box 2 --> */}
        <div class="portfolio-box">
          <img src={project2} alt="" />
          <div class="portfolio-layer">
            <h4>Furniture</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              fuga.
            </p>
            <a href="https://tahakhaledsaad.github.io/Project-02/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        {/* <!-- box 3 --> */}
        <div class="portfolio-box">
          <img src={project3} alt="" />
          <div class="portfolio-layer">
            <h4>Electronics</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              fuga.
            </p>
            <a href="https://tahakhaledsaad.github.io/Project-03">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        {/* <!-- box 4 --> */}
        <div class="portfolio-box">
          <img src={js1} alt="" />
          <div class="portfolio-layer">
            <h4>JS Project</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              fuga.
            </p>
            <a href="https://tahakhaledsaad.github.io/JS-Project/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        {/* <!-- box 5 --> */}
        <div class="portfolio-box">
          <img src={js2} alt="" />
          <div class="portfolio-layer">
            <h4>Shopping</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              fuga.
            </p>
            <a href="https://tahakhaledsaad.github.io/Shopping-Cart/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        {/* <!-- box 6 --> */}
        <div class="portfolio-box">
          <img src={little} alt="" />
          <div class="portfolio-layer">
            <h4>Small Work</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              fuga.
            </p>
            <a href=" https://tahakhaledsaad.github.io/Small-Work/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
