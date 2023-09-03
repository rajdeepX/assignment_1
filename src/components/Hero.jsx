import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <figure className="hero-img-container">
          <picture>
            <source
              media="(min-width: 1920px)"
              srcSet="https://www.aesop.com/u1nb1km7t5q7/1dvhD6dW4gz1ReQeX6AOOu/0cff9578b20343e987e87db82652fa20/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_XL_5120x1856px.jpg"
            />
            <source
              media="(min-width: 1025px)"
              srcSet="https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
            />
            <source
              media="(min-width: 640px)"
              srcSet="https://www.aesop.com/u1nb1km7t5q7/6KVQENCQLrBoulFN8tE6vH/0fa7a75e060060859ba94dd78d3caa0a/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Tablet_1536x1230px.jpg"
            />
            <source
              media="(min-width: 0px)"
              srcSet="https://www.aesop.com/u1nb1km7t5q7/36xhghl86KuVQKLj50bTeC/57b54009d6af1daf2ac570615ad0223d/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Mobile_640x640px.jpg"
            />
            <img
              alt="Three Aesop bar soaps placed next to each other in front of green textured background"
              loading="eager"
              src="https://www.aesop.com/u1nb1km7t5q7/AGQGWYrTapcQI1NrPvsYU/11e99769c1767531dd3c12b6fce85f37/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
            />
            {/* <img src={hero} alt="hero" /> */}
          </picture>
        </figure>
        <div className="hero-text-container">
          <div className="hero-main-text">
            <p className="bar-soap">Bar Soaps</p>
            <p className="hero-text">A body care classic, reimagined</p>
            <p className="hero-info">
              Breathing new life into the humble bar soap are Nurture, Polish
              and Refresh—three additions to the range, each imparting a unique
              constellation of benefits.
            </p>
            <div className="hero-discover">
              <p className="dis-text">
                Discover Bar Soaps{" "}
                <span className="arrow">
                  <BsArrowRightShort />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
