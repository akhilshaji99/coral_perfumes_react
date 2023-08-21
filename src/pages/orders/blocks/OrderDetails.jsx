import React from "react";

function OrderDetails() {
  return (
    <div className="orders-card order-details">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>
            Order No: xxxxxxx <span>(Item: 1)</span>
          </h3>
        </div>
        <div className="col-md-6 text-lg-end tax-invoice">Tax invoice</div>
        <p>Placed on July 2, 2023</p>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>Subtotal</h3>
        </div>
        <div className="col-md-6 text-lg-end">
          <h3>AED 200</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>Shipping Fee</p>
        </div>
        <div className="col-md-6 text-lg-end">
          <h3>0</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>Total (VAT included)</h3>
        </div>
        <div className="col-md-6 text-lg-end">
          <h3>AED 200</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>Estimated VAT</p>
        </div>
        <div className="col-md-6 text-lg-end">
          <h3>AED 32.98</h3>
        </div>
      </div>
      <hr />
      <div className="row align-items-center py-2">
        <div className="col-md-6">
          <h3>Payement Method</h3>
        </div>
        <div className="col-md-6 text-lg-end">
          <h3>Credit Card</h3>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <h3>Delivery Address</h3>
          <p>
            John Smith, Villa 10, Lorem ipsum dolor sit amet, Lorem ipsum dolor
            sit amet, Dubai, 0502250387
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
