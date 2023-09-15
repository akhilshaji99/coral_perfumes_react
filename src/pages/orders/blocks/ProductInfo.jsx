import deviceImageRender from "../../../utils/deviceImageRender";
import $ from "jquery";

function ProductInfo({setModalData,setShowOrderCancelFlag,
  showOrderCancelFlag, modalType,setModalType,orderItem,ongoingOrder}) {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="order-img">
          <img src={deviceImageRender(orderItem?.listing_image)} alt="" />
        </div>
      </div>
      <div className="col-md-5">
        <h4>{orderItem?.product_name}</h4>
        <h2>{orderItem?.amount}</h2>
        <h5>Qty: {orderItem?.quantity}</h5>
        {orderItem?.shipment_number ? (
          <h3>Shipment : {orderItem?.shipment_number}</h3>
        ) : null}
      </div>
      <div className="col-md-4 text-lg-end">
      { (orderItem?.order_status === "Delivery") ?  (
        <h3>Tax invoice</h3>
        ) : 
        null
        }
        { ((orderItem?.order_status === "Ordered" || orderItem?.order_status === "Processing")) ?  (
        <h3 style={{ position: "relative", bottom: "-66px",cursor: "pointer" ,"text-decoration": (ongoingOrder?.order_cancellation_status == 2 ?"none": null)}}  onClick={()=>{
          if(ongoingOrder?.order_cancellation_status == 1){
          setShowOrderCancelFlag(true)
          setModalType("cancel")
          setModalData({
            "ongoingOrder" :ongoingOrder,
            "orderItem": orderItem,
          })
          $("#orderCancelModal").toggle();
          $("#orderCancelModal").toggleClass(
            "modal fade modal"
          );
          }
        }}>
          {ongoingOrder?.order_cancellation_text}
        </h3>
         ) : 
         <h3 style={{ position: "relative", bottom: "-66px" }}>
          Request Return
        </h3>
         }
      </div>
    </div>
  );
}
export default ProductInfo;
