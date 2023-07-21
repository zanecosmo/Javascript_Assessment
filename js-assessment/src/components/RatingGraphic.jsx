import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarStroke } from "@fortawesome/free-regular-svg-icons";

const RatingGraphic = ({ rating }) => {

  const generateRatingGraphic = () => {
    const wholeNumber = Math.floor(rating);
    const fractional = rating - wholeNumber;

    const starGraphic = [];

    for (let i = 0; i < 5; i++) {
      if (i < wholeNumber) {
        starGraphic.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: "#000000" }} />);
      };

      if (i === wholeNumber) {
        const star = fractional < 0.5
          ? <FontAwesomeIcon key={i} icon={faStarStroke} style={{ color: "#000000" }} />
          : <FontAwesomeIcon key={i} icon={faStarHalfStroke} style={{ color: "#000000" }} />

        starGraphic.push(star);
      };

      if (i > wholeNumber) {
        starGraphic.push(<FontAwesomeIcon key={i} icon={faStarStroke} style={{ color: "#000000" }} />)
      };
    };

    return starGraphic;
  };

  return (
    <div>
      { generateRatingGraphic() }
    </div>
  )
};

export default RatingGraphic;