import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="subscribe">
          <p className="sub-head">Subscribe to Aesob communications</p>
          <hr className="footer-hr" />
          <div className="email-btn">
            <p className="email-text">
              Email address{" "}
              <span className="email-arrow">
                <BsArrowRightShort />
              </span>
            </p>
          </div>
          <div className="subs-checkbox">
            <input type="checkbox" />
            <p>
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our{" "}
              <span>
                <a href="#">privacy policy.</a>
              </span>
              .
            </p>
          </div>
        </div>

        <div className="order-support">
          <p className="sub-head">Order and support</p>
          <hr className="footer-hr" />
          <p>
            Contact us{" "}
            <span className="order-arrow">
              <FiArrowUpRight />
            </span>
          </p>
          <p>
            FAQs{" "}
            <span className="order-arrow">
              <FiArrowUpRight />
            </span>
          </p>
          <p>
            Shipping{" "}
            <span className="order-arrow">
              <FiArrowUpRight />
            </span>
          </p>
          <p>
            Returns{" "}
            <span className="order-arrow">
              <FiArrowUpRight />
            </span>
          </p>
          <p>Order history </p>
          <p>Terms and conditions </p>
        </div>

        <div className="order-support">
          <p className="sub-head">Services</p>
          <hr className="footer-hr" />

          <p>Live assistance</p>
          <p>Corporate gifts</p>
          <p>Facial Appoinments</p>
          <p>Click and collect</p>
          <p>Video consultation</p>
        </div>

        <div className="order-support">
          <p className="sub-head">Location preferences</p>
          <hr className="footer-hr" />

          <p>Shipping:</p>
          <p className="order-underline">Hong Kong SAR, China</p>
          <p></p>
          <p>Language:</p>
          <p className="order-underline">English</p>
          <p>繁體中文</p>
        </div>

        <div className="order-support sus">
          <p className="sub-head">Sustainability</p>
          <hr className="footer-hr" />

          <p className="order-line-height">
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </p>
        </div>

        <div className="order-support">
          <p className="sub-head">About</p>
          <hr className="footer-hr" />

          <p>Our Story</p>
          <p>Foundation</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Accessibility</p>
          <p>Cookie Policy</p>
        </div>

        <div className="order-support social-links">
          <p className="sub-head">Social media</p>
          <hr className="footer-hr" />
          <p>
            Instagram{" "}
            <span className="order-arrow">
              <FiArrowUpRight />
            </span>
          </p>
          <p>
            Twitter{" "}
            <span className="order-arrow">
              <FiArrowUpRight />
            </span>
          </p>
          <p>
            LinkedIn{" "}
            <span className="order-arrow">
              <FiArrowUpRight />
            </span>
          </p>
          <p>
            WeChat{" "}
            <span className="order-arrow">
              <FiArrowUpRight />
            </span>
          </p>
          <p>
            Weibo{" "}
            <span className="order-arrow">
              <FiArrowUpRight />
            </span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Aesop</p>
        <div className="socials">
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <AiOutlineTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
