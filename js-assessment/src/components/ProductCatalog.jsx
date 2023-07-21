import { useState } from "react";
import product_data from "../product_data.json";
import Price from "./Price";
import ProductDetails from "./ProductDetails";

const ProductCatalog = () => {
  const [productData, _setProductData] = useState(product_data);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const disableScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
  };
  
  const enableScroll = () => window.onscroll = () => {};

  const viewDetails = (product) => {
    disableScroll();
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null)
    enableScroll();
  };

  return (
    <div className="product-catalog">

      {selectedProduct &&
        <ProductDetails
          product={selectedProduct}
          closeModal={ closeModal }
        />}

      {productData.map((product) => {

        return (
          <div key={product.ProductID} className="product-card">

            <div>
              <img src={product.ThumbnailURL}></img>
            </div>

            <div className="product-info">

              <p className="product-name">{product.Name}</p>

              <Price price={product.Price} retailPrice={product["Retail Price"]} />

            </div>

            <button type="button" onClick={() => viewDetails(product)}>View Details</button>

          </div>
        );
      })}
    </div>
  );
};

export default ProductCatalog;