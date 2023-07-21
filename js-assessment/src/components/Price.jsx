const Price = ({ price, retailPrice }) => {

  return (
    <div className="price-info">
      <p className="price">{`$${price}`}</p>
      <p className="retail-price">{`$${retailPrice}`}</p>
    </div>
  );
};

export default Price;
