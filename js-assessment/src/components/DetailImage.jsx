const DetailImage = ({ pictureURL }) => {

  return (
    <div className="detail-image">
      <img className="detail-image-picture" src={ pictureURL }></img>
      <div className="clearance">Clearance</div>
      <div className="free-shipping">Free Shipping</div>
    </div>
  );
};

export default DetailImage;