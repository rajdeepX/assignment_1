import Carousel from "./Carousel";
import { BsArrowRightShort } from "react-icons/bs";
import soap1 from "../assets/images/soap1.png";
import soap2 from "../assets/images/soap2.png";
import soap3 from "../assets/images/soap3.png";

const slides = [
  {
    img: soap1,
    title: "Nuture Bar Soap",
    info: "Offers a mild yet effective cleanse",
  },
  {
    img: soap2,
    title: "Polish Bar Soap",
    info: "Throughly cleanses and exfoliates skin",
  },
  {
    img: soap3,
    title: "Refresh Bar Soap",
    info: "Offers a thorough end enlivening cleanse",
  },
];

const BodyCareSection = () => {
  return (
    <section className="body-soap-section">
      <div className="body-soap-text-container">
        <div className="for-head-text">
          <p className="for-body">For the body</p>
          <p className="for-care">An expression fo care</p>
        </div>
        <div className="for-info-text">
          <p className="for-info-detail">
            Aesop formulations offer the body deserving care, to cleanse,
            replenish, and nourish skin. Each product is a sensory pleasure to
            use with its own delightful aroma.
          </p>
          <div className="see-body-care">
            <p>
              See all Body Care{" "}
              <span className="body-arrow">
                <BsArrowRightShort />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="carousel">
        <Carousel slides={slides} />
      </div>
    </section>
  );
};

export default BodyCareSection;
