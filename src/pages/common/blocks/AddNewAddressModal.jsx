import $ from "jquery";
import React, { useEffect, useState } from "react";
import getAddressList from "../js/getAddressList";
import AddressListComponent from "./AddressListComponent";
import MakeDefaultAddress from "../js/makeDefaultAddress";
import AddAddressV2 from "../../address_book/blocks/AddAddressV2";
function AddNewAddressModal({
  componentDatas,
  setAddAddressListFlag,
  addAddressListFlag,
  fetchCheckoutApi,
}) {
  const [addressList, setAddressList] = useState([]);
  const [defaultAddress, setDefaultAddress] = useState();
  const [editAddressFlag, setEditAddressFlag] = useState(false);
  const [editAddressInfo, setEditAddressInfo] = useState(null);
  const [addAddressFlag, setAddAddressFlag] = useState(false);

  useEffect(() => {
    if (addAddressListFlag) {
      fetchAddressDatas();
    }
  }, [addAddressListFlag]);

  const fetchAddressDatas = () => {
    getAddressList().then((response) => {
      if (response?.data) {
        setAddressList(response?.data);
      }
    });
  };

  const handleModalClose = () => {
    setAddAddressListFlag(false);

    $("#addressModal").toggle();
    $("#addressModal").toggleClass("modal modal fade");
    $("#addressModal").hide();
  };

  const deleteAddress = (id) => {};
  const editAddress = (info) => {
    setEditAddressInfo(info);
    setEditAddressFlag(true);
    setAddAddressListFlag(false);
    $("#addressModal").toggle();
    $("#addressModal").toggleClass("modal fade modal");
    setAddAddressFlag(true);
    $("#AddAddress").toggle();
    $("#AddAddress").toggleClass("modal fade modal");
  };
  const markDefaultAddress = () => {
    MakeDefaultAddress(defaultAddress).then((response) => {
      fetchCheckoutApi();
      $("#addressModal").toggle();
      $("#addressModal").toggleClass("modal fade modal");
    });
  };

  useEffect(() => {
    if (addAddressListFlag) {
      fetchAddressDatas();
    }
  }, [addAddressListFlag]);

  const resetEditAddressFlag = () => {
    setEditAddressInfo(null);
    setEditAddressFlag(false);
  };

  return (
    <>
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
      <div
        className="modal fade bd-example-modal-lg"
        id="addressModal"
        tabIndex={-1}
        aria-labelledby="addressModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <div className="col-12 text-center">
                <h5 className="modal-title fs-3 fw-bold " id="userModalLabel">
                  CHOOSE ADDRESS
                </h5>
              </div>
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="modal"
                // aria-label="Close"
                onClick={handleModalClose}
              />
            </div>
            <div className="modal-body">
              {addressList?.map((component, index) => {
                return (
                  <AddressListComponent
                    componentDatas={component}
                    defaultAddress={defaultAddress}
                    setDefaultAddress={setDefaultAddress}
                    editAddress={editAddress}
                    deleteAddress={deleteAddress}
                    setAddAddressListFlag={setAddAddressListFlag}
                  />
                );
              })}
            </div>
            <div className="row g-2 ms-3">
              <div className="col-12 change-pop">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    $("#addressModal").toggle();
                    $("#addressModal").toggleClass("modal fade modal");
                    setAddAddressFlag(true);
                    $("#AddAddress").toggle();
                  }}
                >
                  + Add new address
                </a>
              </div>
              <div className="col-12 text-center">
                <div className="mb-5">
                  {" "}
                  <button
                    onClick={markDefaultAddress}
                    className="btn btn-dark p-32px validate"
                  >
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddNewAddressModal;
