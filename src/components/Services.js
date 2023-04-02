import "../css/style.css";

const Services = () => {
  return (
    <section class="services" id="services">
      <h2 class="heading">
        Our <span>Services</span>
      </h2>
      <div class="services-container">
        {/* <!-- box-1  --> */}
        <div class="services-box">
          <i class="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            dolores minus inventore iste adipisci dolor sequi dolorem
            perspiciatis architecto labore?
          </p>
          <a href="#" class="btn">
            Read More
          </a>
        </div>

        {/* <!-- box-2  --> */}
        <div class="services-box">
          <i class="bx bxs-paint"></i>
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            dolores minus inventore iste adipisci dolor sequi dolorem
            perspiciatis architecto labore?
          </p>
          <a href="#" class="btn">
            Read More
          </a>
        </div>

        {/* <!-- box-3  --> */}
        <div class="services-box">
          <i class="bx bx-bar-chart-alt"></i>
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            dolores minus inventore iste adipisci dolor sequi dolorem
            perspiciatis architecto labore?
          </p>
          <a href="#" class="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
