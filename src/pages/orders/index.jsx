import React from "react";
import BreadCrumps from "../common/BreadCrumps";
import MyAccountSidebar from "../common/MyAccountSidebar";
import OrdertopRow from "./blocks/OrdertopRow";
import OrdermiddleRow from "./blocks/OrdermiddleRow";
import OrderbottomRow from "./blocks/OrderbottomRow";

function Index() {
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
              <div className="orders-card">
                <OrdertopRow />
                <OrdermiddleRow />
                <OrderbottomRow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
