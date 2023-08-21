import React from "react";
import BreadCrumps from "../common/BreadCrumps";
import MyAccountSidebar from "../common/MyAccountSidebar";
import ReturntopRow from "./blocks/ReturntopRow";
import ReturnmiddleRow from "./blocks/ReturnmiddleRow";
import ReturnbottomRow from "./blocks/ReturnbottomRow";

function index() {
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
              {/* Order Card */}
              <div className="orders-card">
                <ReturntopRow />
                <ReturnmiddleRow />
                <ReturnbottomRow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
