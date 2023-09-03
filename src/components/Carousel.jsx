import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? currentIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const next = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const img = slides[currentIndex].img;
  const title = slides[currentIndex].title;
  const info = slides[currentIndex].info;

  return (
    <div className="slider-main-container">
      <div className="slider-left-arrow" onClick={previous}>
        <RiArrowLeftSLine />
      </div>
      <div className="slider-right-arrow" onClick={next}>
        <RiArrowRightSLine />
      </div>
      <div className="slide-container">
        <div className="slide-img-container">
          <img src={img} alt="img" />
        </div>
        <div className="slide-text-container">
          <p className="slide-info-head">{title}</p>
          <p className="slide-info-text">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
