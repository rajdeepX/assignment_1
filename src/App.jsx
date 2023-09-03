import "./App.css";

import AlertBanner from "./components/AlertBanner";
import ShippingBanner from "./components/ShippingBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Test from "./components/Carousel";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

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

      {/* <section className="body-soap-section">
        <div className="body-soap-text-container">

        </div>
        .
      </section> */}
      {/* for the body */}
      {/* <h1>Hello</h1>
      <UncontrolledExample />
      <Button>Hello</Button> */}
    </>
  );
}

export default App;
