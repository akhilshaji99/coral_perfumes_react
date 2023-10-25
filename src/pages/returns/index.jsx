import React, { useState, useEffect } from "react";
import BreadCrumps from "../common/BreadCrumps";
import MyAccountSidebar from "../common/MyAccountSidebar";
import ReturntopRow from "./blocks/ReturntopRow";
import ReturnmiddleRow from "./blocks/ReturnmiddleRow";
import ReturnbottomRow from "./blocks/ReturnbottomRow";
import request from "../../utils/request";
import getUserToken from "../../utils/userToken";

function Index() {
  const [buttonActive, setButtonActive] = useState(1);
  const [cancelledOrders, setCancelledOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      const response = await request.post("get_user_cancel_return_items/", bodyFormData);
      if (response?.data) {
        setCancelledOrders(response?.data?.data?.cancelled_orders);
        // setActiveOrders(response?.data?.data?.ongoing_orders);
        // setOnGoingOrders(response?.data?.data?.ongoing_orders);
        // setCompletedOrders(response?.data?.data?.completed_orders);
        // seStatus(!status);
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
              <h2 className="mb-6 text-center my-profile-heading">
                My Returns
              </h2>
              <div
                class="btn-group mb-4"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  class={
                    buttonActive === 1
                      ? `order-btn-active`
                      : "order-btn-inactive"
                  }
                  onClick={() => {
                    setButtonActive(1);
                  }}
                >
                  CANCELLED
                </button>
                <button
                  type="button"
                  class={
                    buttonActive === 2
                      ? `order-btn-active`
                      : "order-btn-inactive"
                  }
                  onClick={() => {
                    setButtonActive(2);
                  }}
                >
                  RETURNED
                </button>
              </div>
              {/* Order Card */}
              {cancelledOrders?.map((orderDetails, index) => {
                return (
                  <div className="orders-card" key={index}>
                    <ReturntopRow />
                    <ReturnmiddleRow orderDetails={orderDetails}/>
                    <ReturnbottomRow orderDetails={orderDetails}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
