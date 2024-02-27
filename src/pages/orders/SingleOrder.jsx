import MyAccountSidebar from "../common/MyAccountSidebar";
import BreadCrumps from "../common/BreadCrumps";
import OrderDetails from "./blocks/OrderDetails";
import request from "../../utils/request";
import { useEffect, useState } from "react";
// import { date } from "yup";
import OrderCancelModal from "./blocks/OrderCancelModal";

function SingleOrder() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [showOrderCancelFlag, setShowOrderCancelFlag] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState("cancel");
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

  useEffect(() => {
    getOrderDatas();
  }, [window.location.href]);

  const refetchApi = () => {
    getOrderDatas();
  };

  const getOrderDatas = async () => {
    try {
      const queryParameters = new URLSearchParams(window.location.search);
      const order_id = queryParameters.get("order_id");
      var bodyFormData = new FormData();
      bodyFormData.append("order_id", order_id);
      const response = await request.post("get_order_details/", bodyFormData);
      if (response?.data) {
        console.log('response?.data?.bread_crumb_data',response?.data)
        setBreadCrumbDatas(response?.data?.bread_crumb_data)
        setOrderDetails(response?.data?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <section>
      <div className="container-fluid">
        <BreadCrumps  breadCrumbDatas={breadCrumbDatas}/>
        <div className="row">
          <MyAccountSidebar />
          <OrderCancelModal
            refetchApi={refetchApi}
            modalData={modalData}
            showOrderCancelFlag={showOrderCancelFlag}
            setShowOrderCancelFlag={setShowOrderCancelFlag}
            modalType={modalType}
            setModalType={setModalType}
            orderType="SingleOrder"
          />
          <div className="col-lg-9 col-md-9 col-12 prd-0">
            <div className="py-6 p-md-6 p-lg-10">
              <h2 className="mb-6 text-center my-profile-heading">My Orders</h2>
              {/* Order Card */}
              <OrderDetails
                orderDetails={orderDetails}
                setShowOrderCancelFlag={setShowOrderCancelFlag}
                setModalType={setModalType}
                setModalData={setModalData}
              />
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
