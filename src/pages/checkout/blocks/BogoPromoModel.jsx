import React from "react";
import $ from "jquery";
import GiveawayProductCarousel from "./GiveawayProductCarousel";

const BogoPromoModal = ({ showBogoModal, handleCloseBogoModal, products, setShowPrmoCodeFlag }) => {
  console.log('giveaway:', products);



  const handleSelect = (productName) => {
    console.log("Selected product:", productName);
    setShowPrmoCodeFlag(false);
    $("#promocodeModal").toggle();
    $("#promocodeModal").toggleClass("modal modal fade");
    $("#promocodeModal").hide();
    handleCloseBogoModal();
  };


  return (
    <div
      className={`modal fade ${showBogoModal ? "show" : ""}`}
      id="bogoPromoModal"
      tabIndex={-1}
      aria-labelledby="bogoPromoModalLabel"
      aria-hidden={!showBogoModal}
      style={{ display: showBogoModal ? "block" : "none" }}
    >
      {products.length > 0 ? (
              <GiveawayProductCarousel products={products} handleCloseBogoModal={handleCloseBogoModal} setShowPrmoCodeFlag={setShowPrmoCodeFlag} />
            ) : (
              <p>No products available</p>
            )}
    </div>
  );
};

export default BogoPromoModal;




