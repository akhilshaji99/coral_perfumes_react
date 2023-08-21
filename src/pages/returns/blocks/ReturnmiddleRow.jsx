import React from "react";

function OrdermiddleRow() {
  return (
    <div className="row order-middle-row align-items-center">
      <div className="col-md-6">
        <h3>
          Order No: xxxxxxx <span>(Item: 1)</span>
        </h3>
        <h4>View Details</h4>
      </div>
      <div className="col-md-6 text-lg-end">
        <p>placed on July 2, 2023, 9:00 AM</p>
        <p>Return date July 3, 2023, 8:49 AM</p>
      </div>
    </div>
  );
}

export default OrdermiddleRow;
