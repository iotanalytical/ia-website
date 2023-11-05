import "./Product.scss";

import dashboardParts from "../../assets/images/product-dashboard.png";

const Product = () => {
  return (
    <section id="product" className="product">
      <div className="container">
        <header className="product__header">
          <img
            className="product__img"
            src={dashboardParts}
            alt="dashboard parts"
          />
          <div className="product__info">
            <h2 className="text-center mb-4 section-title">Product</h2>
            <p className="text-center text-justify">
              IoT Analytical is an analytical service which gathers data from
              other devices in smart home solution regardless of the brand or
              the used protocol. Our service can be easily integrated into the
              current smart home solution provider’s system while helping them
              to remotely diagnose all possible system issues and malfunctions.
              This will be beneficial for maintainers and providers in terms of
              reducing the maintenance costs since it’s being done remotely.
              Moreover, it also can provide recommendations according to the
              user’s consumption pattern to help reduce utility costs.
            </p>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Product;
