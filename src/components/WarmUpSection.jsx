import { BsArrowRightShort } from "react-icons/bs";

const WarmUpSection = () => {
  return (
    <section className="body-soap-section">
      <div className="body-soap-text-container">
        <div className="for-head-text">
          <p className="for-body">The Athenaeum</p>
          <p className="for-care">The warm-up</p>
        </div>
        <div className="for-info-text">
          <p className="for-info-detail">
            In The Athenaeum, our digital reading room: a guide to ensuring a
            healthy complexion through the warmer months.
          </p>
          <div className="warm-readmore">
            <p className="readmore-text">
              Read more{" "}
              <span className="body-arrow">
                <BsArrowRightShort />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="warm-img-container">
        <picture>
          <source
            media="(min-width: 1025px)"
            srcSet="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg"
          />

          <source
            media="(min-width: 640px)"
            srcSet="https://www.aesop.com/u1nb1km7t5q7/4M314XO7jTNxQ8Ah5GSA4K/9998a584291acf641f80fa46dcec37ab/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Tablet_1400x788px.jpg"
          />

          <source
            media="(min-width: 0px)"
            srcSet="https://www.aesop.com/u1nb1km7t5q7/6JgoxaY07ELbLnt8ZA13Ci/9b4af6dd71f15a3614c9f0cde35c6cb6/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Mobile_640x360px.jpg"
          />

          <img
            alt="Shelves of Aesop products in-store with a leafy green plant visible in foreground. "
            loading="lazy"
            src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg"
          />
        </picture>
      </div>
    </section>
  );
};

export default WarmUpSection;
