import React from "react";
import birthday1 from "../../assets/img/Group 8760.png";
import birthday2 from "../../assets/img/BACKGROUND3.png";
const SaveBirthdayPopup = ({
  show,
  setShowConfirmation,
  
}) => {
  const handleConfirm = () => {
    setShowConfirmation(false);
  
    // setIsDateSaved(true); 
    // setIsSubmitted(true);
    // localStorage.setItem('isSubmitted', 'true');
  };

  // If show is false, return null to hide the component
  if (!show) {
    return null;
  }

  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <img
          src={birthday2}
          alt="Background"
          className="backgroundImg"
        />
        <div className="yellowSection">
          <img
            src={birthday1}
            alt="Center"
            className="centerImage"
          />
          <span
            className="closeIcon"
            onClick={handleConfirm}
          >
            &#x2715;
          </span>
        </div>
        <div className="whiteSection">
          <h4>SUCCESS!</h4>
          <p>Visit Any Coral Perfume Stores with proof of your Birth Date to claim your Free Birthday Gift</p>
          <p className="whiteSectionTC">T&C Apply</p>
        </div>
      </div>
    </div>
  );
};

export default SaveBirthdayPopup;