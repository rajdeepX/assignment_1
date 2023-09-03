import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Carousel from "./Carousel";

import poo1 from "../assets/images/poo1.avif";
import poo2 from "../assets/images/poo2.webp";
import poo3 from "../assets/images/poo2.webp";
import poo4 from "../assets/images/poo2.webp";
import poo5 from "../assets/images/poo3.webp";
import poo6 from "../assets/images/poo4.webp";
import poo7 from "../assets/images/poo4.webp";
import poo8 from "../assets/images/poo4.webp";

const slides = [
  {
    img: poo1,
    title: "Post-Poo Drops",
    info: "A botanical bathroom deodriser",
  },
  {
    img: poo2,
    title: "Aganice Aromatique Candle",
    info: "Cardamom, Mimosa, Tobaco",
  },
  {
    img: poo3,
    title: "Ptolemy Aomatique Candle",
    info: "A sensuous blend of leather, smoke and wood",
  },
  {
    img: poo4,
    title: "Callippus Aomatique Candle",
    info: "A marriage of deep greens and earthy spices",
  },
  {
    img: poo5,
    title: "Bronze Incense Holder",
    info: "Suited to any interior",
  },
  {
    img: poo6,
    title: "Murasaki Aomatique Candle",
    info: "For those who favour aromas of warm spice",
  },
  {
    img: poo7,
    title: "Kagerou Aomatique Candle",
    info: "For those particularly partial to Vetiver",
  },
  {
    img: poo8,
    title: "Sarashina Aomatique Candle",
    info: "For those particularly partial to Sandalwood",
  },
];

const DomesticSection = () => {
  return (
    <section className="body-soap-section">
      <div className="body-soap-text-container">
        <div className="for-head-text">
          <p className="for-body">For the home</p>
          <p className="for-care">Domestic pleasures</p>
        </div>
        <div className="for-info-text">
          <p className="for-info-detail">
            Our range of aromatic formulations for the home are practical and
            pleasing in equal measure.
          </p>
          <div className="see-body-care">
            <p>
              See all Home{" "}
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

export default DomesticSection;
