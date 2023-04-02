import "../css/style.css";
import trans1 from "../images/trans1.png"

const About = () => {
  return (
    <section class="about" id="about">
        
      <div class="about-img">
        <img src={trans1} alt="" />
      </div>
      <div class="about-content">
        <h2 class="heading">About <span>Me</span></h2>
        <h3>Frontend Developer!</h3>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos commodi, eos voluptatum, mollitia hic atque aspernatur accusamus excepturi id laboriosam veniam minima tempora sed voluptatem?
        </p>
        <a href="#" class="btn">Read More</a>
      </div>
    </section>
  );
}

export default About;