import deviceImageRender from "../../../utils/deviceImageRender";
import $ from "jquery";

function ProductInfo({
  setModalData,
  setShowOrderCancelFlag,
  // showOrderCancelFlag,
  // modalType,
  setModalType,
  orderItem,
  ongoingOrder,
}) {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-4">
        <div className="order-img">
          <img src={deviceImageRender(orderItem?.listing_image)} alt="" />
        </div>
      </div>
      <div className="col-lg-5 col-md-5 col-5">
        <h4>{orderItem?.product_name}</h4>
        <h2>{orderItem?.amount}</h2>
        <h5>Qty: {orderItem?.quantity}</h5>
        {orderItem?.shipment_number ? (
          <h3>{orderItem?.shipment_number_title} : {orderItem?.shipment_number}</h3>
        ) : null}
      </div>
      <div className="col-lg-4 col-md-3 col-3 text-sm-end text-lg-end">
        {/* {ongoingOrder?.order_status === "Delivery" ? (
          <h3>Tax invoice</h3>
        ) : null} */}

        {ongoingOrder?.order_status === "Ordered" ||
        ongoingOrder?.order_status === "Processing" ||
        ongoingOrder?.order_cancellation_status === 2 ? (
          <h3
            style={{
              position: "relative",
              bottom: "-66px",
              cursor: "pointer",
              "text-decoration":
                ongoingOrder?.order_cancellation_status == 2 ? "none" : null,
            }}
            onClick={() => {
              if (ongoingOrder?.order_cancellation_status == 1) {
                setShowOrderCancelFlag(true);
                setModalType("cancel");
                setModalData({
                  ongoingOrder: ongoingOrder,
                  orderItem: orderItem,
                });
                $("#orderCancelModal").toggle();
                $("#orderCancelModal").toggleClass("modal fade modal");
              }
            }}
          >
            {ongoingOrder?.order_cancellation_text}
          </h3>
        ) : null}
        {/* Return Datas */}

        {ongoingOrder?.order_status === "Delivery"  ? (
          <h3
            style={{
              position: "relative",
              bottom: "-66px",
              "text-decoration":
                ongoingOrder?.return_status === "Request Return" ||
                ongoingOrder?.return_status === ""
                  ? null
                  : "none",
            }}
            onClick={() => {
              if (
                ongoingOrder?.return_status === "Request Return" ||
                ongoingOrder?.return_status === ""
              ) {
                setShowOrderCancelFlag(true);
                setModalType("return");
                setModalData({
                  ongoingOrder: ongoingOrder,
                  orderItem: orderItem,
                });
                $("#orderCancelModal").toggle();
                $("#orderCancelModal").toggleClass("modal fade modal");
              }
            }}
          >
            {ongoingOrder?.return_status || 'Request Return'} <br />
          </h3>
        ) : null}
        {ongoingOrder?.return_option ? (
          <>
            <br />
            <br />
            <h3 style={{ "text-decoration": "none" }}>
              {ongoingOrder?.return_message}
            </h3>
          </>
        ) : null}

        {/* End of Return Datas */}
      </div>
    </div>
  );
}
export default ProductInfo;
