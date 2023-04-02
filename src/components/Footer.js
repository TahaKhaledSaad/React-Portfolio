import "../css/style.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div className="subscribe">
        <p>Your Email</p>
        <form action="" className="search-bar">
          <input type="email" name="q" id="" placeholder="Email"/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="footer-text">
        <p>Copyright &copy; 2023 by Taha | All Rights Reserved</p>
      </div>

      <div class="footer-iconTop">
        <a href="#home">
          <i class="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
