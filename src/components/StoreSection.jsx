import { BsArrowRightShort } from "react-icons/bs";
import Carousel from "./Carousel";

import store1 from "../assets/images/store1.avif";
import store2 from "../assets/images/store2.avif";
import store3 from "../assets/images/store3.jpg";
import StoreCarousel from "./StoreCarousel";

const slides = [
  {
    img: store1,
    title: "Aesop Fashion Walk",
  },
  {
    img: store2,
    title: "Aesop MOKO",
  },
  {
    img: store3,
    title: "Aesop ifc mall",
  },
];

const StoreSection = () => {
  return (
    <section className="body-soap-section">
      <div className="body-soap-text-container">
        <div className="for-head-text">
          {/* <p className="for-body"></p> */}
          <p className="for-care">Store locator</p>
        </div>
        <div className="for-info-text">
          <p className="for-info-detail post-poo-info">
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.
          </p>
          <div className="warm-readmore">
            <p className="readmore-text" style={{ fontWeight: "bold" }}>
              Find a nearby store{" "}
              <span className="body-arrow">
                <BsArrowRightShort />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="carousel">
        <StoreCarousel slides={slides} />
      </div>
    </section>
  );
};

export default StoreSection;
