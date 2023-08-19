import React from "react";
// import BagEmpty from "./blocks/BagEmpty";
// import WishlistEmpty from "./blocks/WishlistEmpty";
import PaymentSuccess from "./PaymentSuccess";
// import PaymentFailed from "./blocks/PaymentFailed";

function index() {
  return (
    <div>
      <div className="container-lg-fluid alert-padding">
        <PaymentSuccess />
        {/* <PaymentFailed/> */}
        {/* <BagEmpty/> */}
        {/* <WishlistEmpty/> */}
      </div>
    </div>
  );
}

export default index;
