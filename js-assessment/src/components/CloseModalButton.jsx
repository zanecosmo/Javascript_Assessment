import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CloseModalButton = ({ closeModal }) => {
  return (
    <div className="close-modal-button" onClick={closeModal}>
      <FontAwesomeIcon icon={faCircleXmark} size="2x" style={{ color: "#000000", }} />
    </div>
  );
};

export default CloseModalButton;