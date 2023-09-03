import "./App.css";

import AlertBanner from "./components/AlertBanner";
import ShippingBanner from "./components/ShippingBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BodyCareSection from "./components/BodyCareSection";
import WarmUpSection from "./components/WarmUpSection";
import SkinSection from "./components/SkinSection";
import PostPooSection from "./components/PostPooSection";
import DomesticSection from "./components/DomesticSection";
import StoreSection from "./components/StoreSection";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AlertBanner />
      <ShippingBanner />

      {/* smol navbar */}

      <Navbar />
      {/* smol navbar */}

      {/* hero */}

      <Hero />

      {/* hero */}

      {/* for the body */}

      <BodyCareSection />
      {/* for the body */}

      {/* warm */}
      <WarmUpSection />
      {/* warm */}

      {/* skin */}
      <SkinSection />
      {/* skin */}

      {/* post-poo */}
      <PostPooSection />
      {/* post-poo */}

      {/* domestic section */}
      <DomesticSection />
      {/* domestic section */}

      {/* store */}
      <StoreSection />
      {/* store */}

      {/* quote */}
      <Quote />
      {/* quote */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </>
  );
}

export default App;
