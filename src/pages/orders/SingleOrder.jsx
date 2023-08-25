import MyAccountSidebar from "../common/MyAccountSidebar";
import BreadCrumps from "../common/BreadCrumps";
import OrderDetails from "./blocks/OrderDetails";
import request from "../../utils/request";
import { useEffect, useState } from "react";
import { date } from "yup";

function SingleOrder() {
  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    getOrderDatas();
  }, [window.location.href]);

  const getOrderDatas = async () => {
    try {
      const queryParameters = new URLSearchParams(window.location.search);
      const order_id = queryParameters.get("order_id");
      var bodyFormData = new FormData();
      bodyFormData.append("order_id", order_id);
      const response = await request.post("get_order_details/", bodyFormData);
      if (response?.data) {
        setOrderDetails(response?.data?.data);
        // setOnGoingOrders(response?.data?.data?.ongoing_orders);
        // setCompletedOrders(response?.data?.data?.completed_orders);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <section>
      <div className="container-fluid">
        <BreadCrumps />
        <div className="row">
          <MyAccountSidebar />
          <div className="col-lg-9 col-md-9 col-12">
            <div className="py-6 p-md-6 p-lg-10">
              <h2 className="mb-6 text-center my-profile-heading">My Orders</h2>
              {/* Order Card */}
              <OrderDetails orderDetails={orderDetails}/>
              {/* {ongoingOrders?.map((ongoingOrder) => {
                return <OrderDatas ongoingOrder={ongoingOrder} />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleOrder;
