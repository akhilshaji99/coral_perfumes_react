import React from "react";

function OrdertopRow({ buttonActive }) {
  return (
    <div className="row order-top-row">
      <div className="col-md-3 returned-haed">
        <h3>{buttonActive === 1 ? "Cancelled" : "Returned"}</h3>
      </div>
    </div>
  );
}

export default OrdertopRow;
