import { BsArrowRightShort } from "react-icons/bs";

const PostPooSection = () => {
  return (
    <section className="post-poo-section">
      <div className="poo-img-container">
        <picture>
          <source
            media="(min-width: 1920px)"
            srcSet="https://www.aesop.com/u1nb1km7t5q7/2kTc0kZ961s3KYZGjXIfYH/e9ca7e871e57b090c22c761debbe75ec/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_XL_2560x1540px.png"
          />

          <source
            media="(min-width: 1025px)"
            srcSet="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png"
          />

          <source
            media="(min-width: 640px)"
            srcSet="https://www.aesop.com/u1nb1km7t5q7/2QyIviYUNnEhsL0Pwb6csq/04abdca7560010c628819dc6b9698dbf/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Tablet_1400x846px.png"
          />

          <source
            media="(min-width: 0px)"
            srcSet="https://www.aesop.com/u1nb1km7t5q7/6EATrTq3LMKafQ8ZxG7A4f/55819d882716c6a1963cbc83ecc37f09/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Mobile_640x640px.png"
          />

          <img
            alt="Retro black and white photograph depicting a woman outdoors using a hose to water flowers growing out of a toilet bowl."
            loading="lazy"
            src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png"
          />
        </picture>
      </div>
      <div className="poo-text-container">
        <div className="poo-head-text">
          {/* <p className="for-body"></p> */}
          <p className="poo-care">Post-Poo Drops has returned</p>
        </div>
        <div className="for-info-text">
          <p className="for-info-detail post-poo-info">
            Here to make the malodorous melodious once again. Dispense this
            favoured formulation into the toilet bowl after flushing to
            effectively mask disagreeable odours.
          </p>
          <div className="warm-readmore">
            <p className="readmore-text" style={{ fontWeight: "bold" }}>
              Discover Post-Poo Drops{" "}
              <span className="body-arrow">
                <BsArrowRightShort />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPooSection;
