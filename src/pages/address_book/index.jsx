import React, { useEffect, useState } from "react";
import MyAccountSidebar from "../common/MyAccountSidebar";
import BreadCrumps from "../common/BreadCrumps";
import AddAddress from "./blocks/AddAddress";
import AddAddressV2 from "./blocks/AddAddressV2";
import AddressListComponent from "../checkout/blocks/AddressListComponent";
import MakeDefaultAddress from "../checkout/js/makeDefaultAddress";
import getAddressList from "../checkout/js/getAddressList";
import $ from "jquery";

function Index() {
  const [addressList, setAddressList] = useState([]);
  const [defaultAddress, setDefaultAddress] = useState();
  const [editAddressFlag, setEditAddressFlag] = useState(false);
  const [editAddressInfo, setEditAddressInfo] = useState(null);
  const [addAddressFlag, setAddAddressFlag] = useState(false);
  const [addAddressListFlag, setAddAddressListFlag] = useState(true);
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

  useEffect(() => {
    if (addAddressListFlag) {
      fetchAddressDatas();
    }
  }, [addAddressListFlag]);

  const fetchAddressDatas = () => {
    getAddressList().then((response) => {
      if (response?.data) {
        setBreadCrumbDatas(response?.bread_crumb_data);
        setAddressList(response?.data);
      }
    });
  };

  const markDefaultAddress = () => {
    MakeDefaultAddress(defaultAddress).then((response) => {
      if (response) {
        getAddressList().then((response) => {
          if (response?.data) {
            setBreadCrumbDatas(response?.bread_crumb_data);
            setAddressList(response?.data);
          }
        });
      }
    });
  };
  const editAddress = (info) => {
    setEditAddressInfo(info);
    setEditAddressFlag(true);
    // setAddAddressListFlag(false);
    $("#AddAddress").toggle();
    // $("#addressModal").toggleClass("modal fade modal");
    // setAddAddressFlag(true);
    // $("#AddAddress").toggle();
    // $("#AddAddress").toggleClass("modal fade modal");
  };

  const resetEditAddressFlag = () => {
    setEditAddressInfo(null);
    setEditAddressFlag(false);
  };
  return (
    <main>
      {/* section */}
      {/* <BreadCrumps /> */}
      <br />
      <section>
        <div className="container-md-fluid">
          <BreadCrumps breadCrumbDatas={breadCrumbDatas} />
          <div className="row">
            <MyAccountSidebar />
            {/* <AddAddress
              addAddressFlag={addAddressFlag}
              setAddAddressFlag={setAddAddressFlag}
              setAddAddressListFlag={setAddAddressListFlag}
              editAddressFlag={editAddressFlag}
              editAddressInfo={editAddressInfo}
              setEditAddressFlag={setEditAddressFlag}
              setEditAddressInfo={setEditAddressInfo}
            /> */}
            <AddAddressV2
              fetchAddressDatas={fetchAddressDatas}
              editAddressFlag={editAddressFlag}
              editAddressInfo={editAddressInfo}
              resetEditAddressFlag={resetEditAddressFlag}
            />
            <div className="col-lg-9 col-md-9 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                {/* heading */}
                <h2 className="mb-6 text-center my-profile-heading">
                  Address Book
                </h2>
                {addressList?.map((component, index) => {
                  return (
                    <AddressListComponent
                      componentDatas={component}
                      defaultAddress={defaultAddress}
                      setDefaultAddress={setDefaultAddress}
                      editAddress={editAddress}
                      setAddAddressListFlag={setAddAddressListFlag}
                    />
                  );
                })}
                <label
                  // data-bs-toggle="modal"
                  className="btn-link"
                  // data-bs-target="#AddAddress"
                  onClick={(e) => {
                    e.preventDefault();
                    $("#AddAddress").toggle();
                  }}
                >
                  + Add New Address
                </label>
                {addressList.length > 0 ? (
                  <div className="col-12 text-start">
                    <button
                      className="btn btn-dark col-md-2 mt-4"
                      type="button"
                      onClick={markDefaultAddress}
                    >
                      Save
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Index;
