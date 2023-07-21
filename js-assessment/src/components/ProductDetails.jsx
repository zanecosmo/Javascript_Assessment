import { useState } from "react";
import CloseModalButton from "./CloseModalButton";
import DetailImage from "./DetailImage";
import Price from "./Price";
import ProductAddedToast from "./ProductAddedToast";
import RatingGraphic from "./RatingGraphic";

const ProductDetails = ({ product, closeModal }) => {
  const [isProductAdded, setIsProductAdded] = useState(false);

  const renderToast = () => {
    setIsProductAdded(true);

    setTimeout(() => setIsProductAdded(false), 3000);
  };

  const addToCart = () => {
    renderToast();
  };

  return (
    <div className="product-details">

      <CloseModalButton closeModal={closeModal} />
      {isProductAdded === true && <ProductAddedToast />}

      <div className="primary-details">

        <div className="image-and-info">
          <DetailImage pictureURL={product.PictureURL} />
          <div className="secondary-details">
            <div>
              <p className="brand">Brand: </p>
              <p className="product-brand">{product.Brand}</p>
            </div>
            <div>
              <p className="color">Color: </p>
              <p className="product-color">{product.Color}</p>
            </div>
          </div>
        </div>

        <div className="detail-info">
          <p className="product-name">{product.Name}</p>

          <RatingGraphic rating={product.RatingAvg || product["Rating Avg"]} />

          <p className="product-description">{product.Description}</p>
        </div>


        <div className="price-and-buy">
          <div className="pnb">
            <Price price={product.Price} retailPrice={product["Retail Price"]} />
          </div>

          <div className="spacer"></div>

          <div className="out-of-stock">Out of Stock</div>

          <button className="add-to-cart" type="button" onClick={addToCart}>Add to Cart</button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;