import React from "react";
import OrderProgress from "./OrderProgress";
import OrderHeader from "./OrderHeader";
import ProductInfo from "./ProductInfo";

function OrderDetails({
  orderDetails,
  setShowOrderCancelFlag,
  setModalData,
  setModalType,
}) {
  return (
    <>
      <div className="orders-card order-details">
        <div className="row align-items-center mb-4">
          <div className="col-md-6 col-6 pb-2">
            <h3>
              Order No: {orderDetails?.order_no}{" "}
              <span>(Item: {orderDetails?.items_count})</span>
            </h3>
          </div>
          <div className="col-md-6 col-6 text-lg-end tax-invoice">
            <a
              target="_blank"
              href={process.env.REACT_APP_BASE_URL + orderDetails?.invoice_link}
              style={{ color: "#000" }}
            >
              {orderDetails?.invoice_link_title}
            </a>
          </div>
          <p>{orderDetails?.order_date}</p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-6">
            <h3>{orderDetails?.sub_total_title}</h3>
          </div>
          <div className="col-md-6 col-6 text-lg-end">
            <h3>{orderDetails?.sub_total}</h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-6">
            <p>{orderDetails?.shipping_title}</p>
          </div>
          <div className="col-md-6 col-6 text-lg-end">
            <h3>{orderDetails?.shipping_amount_value}</h3>
          </div>
        </div>
        <div className="row align-items-center mb-6">
          <div className="col-md-6 col-6">
            <p>{orderDetails?.gift_wrap_title}</p>
          </div>
          <div className="col-md-6 col-6 text-lg-end">
            <h3>{orderDetails?.gift_wrap_amount}</h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-6">
            <h3>{orderDetails?.total_title}</h3>
          </div>
          <div className="col-md-6 col-6 text-lg-end">
            <h3>{orderDetails?.total_title_amount}</h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-6">
            <p>{orderDetails?.vat_title}</p>
          </div>
          <div className="col-md-6 col-6 text-lg-end">
            <h3>{orderDetails?.vat_amount}</h3>
          </div>
        </div>
        <hr />
        <div className="row align-items-center py-2">
          <div className="col-md-6 col-6">
            <h3>{orderDetails?.payment_type_title}</h3>
          </div>
          <div className="col-md-6 col-6 text-lg-end">
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
              {orderDetails?.shipping_address_id?.flat_name
                ? orderDetails?.shipping_address_id?.flat_name + ", "
                : ""}
              {orderDetails?.shipping_address_id?.floor_number
                ? orderDetails?.shipping_address_id?.floor_number + ", "
                : null}
              {orderDetails?.shipping_address_id?.building_number
                ? orderDetails?.shipping_address_id?.building_number + ", "
                : null}
              {orderDetails?.shipping_address_id?.city
                ? orderDetails?.shipping_address_id?.city + ","
                : null}
              {orderDetails?.shipping_address_id?.emirate
                ? orderDetails?.shipping_address_id?.emirate + ", "
                : null}
              {orderDetails?.shipping_address_id?.postal_code}
              <br />
              {orderDetails?.shipping_address_id?.phone_number}
              {orderDetails?.store_data?.store_name
                ? orderDetails?.store_data?.store_name + ","
                : null}
              {orderDetails?.store_data?.location
                ? orderDetails?.store_data?.location
                : null}
            </p>
          </div>
        </div>
      </div>
      {orderDetails?.orderline?.map((orderItem) => {
        return (
          <div className="orders-card">
            <OrderProgress order_current_status={orderItem?.order_status} />
            <OrderHeader ongoingOrder={orderDetails} orderType={"SingleItem"} />
            <div className="row order-bottom-row">
              <div className="col-md-12">
                <ProductInfo
                  setShowOrderCancelFlag={setShowOrderCancelFlag}
                  setModalData={setModalData}
                  setModalType={setModalType}
                  orderItem={orderItem}
                  ongoingOrder={{
                    order_status: orderItem?.order_status,
                    order_cancellation_text:
                      orderItem?.cancel_status || "Request Cancellation",
                    order_no: orderDetails?.order_no,
                    order_cancellation_status:
                      orderItem?.order_cancellation_status,
                    return_status: orderItem?.return_status || 'Request Return',
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default OrderDetails;
