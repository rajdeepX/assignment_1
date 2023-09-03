import { AiOutlinePlus } from "react-icons/ai";

const ShippingBanner = () => {
  return (
    <div className="shipping-banner">
      <p>
        Click and Collect is now available at Hong Kong stores. Enjoy
        complimentary shipping on orders over HK$400
      </p>
      <div className="plus-icon">
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default ShippingBanner;
