import React from "react";
import OrderProgress from "./OrderProgress";
import OrderHeader from "./OrderHeader";
import ProductInfo from "./ProductInfo";

function OrderDetails({ orderDetails }) {
  return (
    <>
      <div className="orders-card order-details">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3>
              Order No: {orderDetails?.order_no}{" "}
              <span>(Item: {orderDetails?.items_count})</span>
            </h3>
          </div>
          <div className="col-md-6 text-lg-end tax-invoice">Tax invoice</div>
          <p>{orderDetails?.order_date}</p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3>{orderDetails?.sub_total_title}</h3>
          </div>
          <div className="col-md-6 text-lg-end">
            <h3>{orderDetails?.sub_total}</h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>{orderDetails?.shipping_title}</p>
          </div>
          <div className="col-md-6 text-lg-end">
            <h3>{orderDetails?.shipping_amount_value}</h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3>{orderDetails?.total_title}</h3>
          </div>
          <div className="col-md-6 text-lg-end">
            <h3>{orderDetails?.total_title_amount}</h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>{orderDetails?.vat_title}</p>
          </div>
          <div className="col-md-6 text-lg-end">
            <h3>{orderDetails?.vat_amount}</h3>
          </div>
        </div>
        <hr />
        <div className="row align-items-center py-2">
          <div className="col-md-6">
            <h3>{orderDetails?.payment_type_title}</h3>
          </div>
          <div className="col-md-6 text-lg-end">
            <h3>{orderDetails?.payment_type_value}</h3>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3>{orderDetails?.address_title}</h3>
            <p>
              {orderDetails?.shipping_address_id?.first_name}{" "}
              {orderDetails?.shipping_address_id?.last_name}
              <br />
              {orderDetails?.shipping_address_id?.flat_name},
              {orderDetails?.shipping_address_id?.floor_number},
              {orderDetails?.shipping_address_id?.building_number},{" "}
              {orderDetails?.shipping_address_id?.city},
              {orderDetails?.shipping_address_id?.emirate},
              {orderDetails?.shipping_address_id?.postal_code}
              <br />
              {orderDetails?.shipping_address_id?.phone_number}
            </p>
          </div>
        </div>
      </div>
      {orderDetails?.orderline?.map((orderItem) => {
        return (
          <div className="orders-card">
            <OrderProgress />
            <OrderHeader ongoingOrder={orderDetails} />
            <div className="row order-bottom-row">
              <div className="col-md-12">
                <ProductInfo orderItem={orderItem} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default OrderDetails;
