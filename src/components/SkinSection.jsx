import { BsArrowRightShort } from "react-icons/bs";
import Carousel from "./Carousel";

import skin1 from "../assets/images/skin1.png";
import skin2 from "../assets/images/skin2.webp";
import skin3 from "../assets/images/skin3.webp";
import skin4 from "../assets/images/skin4.webp";
import skin5 from "../assets/images/skin5.webp";
import skin6 from "../assets/images/skin6.webp";
import skin7 from "../assets/images/skin7.webp";
import skin8 from "../assets/images/skin8.webp";

const slides = [
  {
    img: skin1,
    title: "Licent Facial Concentrate",
    info: "A Vitamin C-rich layering serum",
  },
  {
    img: skin2,
    title: "Purifying Facial Cream Cleanser",
    info: "A daily cream cleanser for dry skin",
  },
  {
    img: skin3,
    title: "Camellia Nut Facial Hydrating Cream",
    info: "For normal, dry or sensitive skin",
  },
  {
    img: skin4,
    title: "Parsley Seed Anti-Oxidant Eye Cream",
    info: "Nourishes delicate skin around eyes",
  },
  {
    img: skin5,
    title: "B Tripple C Facial Balancing Gel",
    info: "Anti-oxidant gel infused with Vitamin B and C",
  },
  {
    img: skin6,
    title: "Mandarin Facial Hydrating Cream",
    info: "Rapidly absorbed, lightly hydrating",
  },
  {
    img: skin7,
    title: "Parsley Seed Anti-Oxidant Intense Serum",
    info: "A hydrating serum to bolster skin",
  },
  {
    img: skin8,
    title: "Parsley Seed Facial Cleanser",
    info: "For those in polluted urban environments",
  },
];

const SkinSection = () => {
  return (
    <section className="body-soap-section">
      <div className="body-soap-text-container">
        <div className="for-head-text">
          <p className="for-body">For the skin</p>
          <p className="for-care">Attention for all types</p>
        </div>
        <div className="for-info-text">
          <p className="for-info-detail">
            The well-being of your skin is the product of hydration,
            nourishment, and protection through discerning rituals. Explore
            requisite skin care for all skin types.
          </p>
          <div className="see-body-care">
            <p>
              See all Skin Care{" "}
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

export default SkinSection;
