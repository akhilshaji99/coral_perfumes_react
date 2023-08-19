import $ from "jquery";
import React, { useEffect, useState } from "react";
import getAddressList from "../js/getAddressList";
import AddressListComponent from "./AddressListComponent";
import MakeDefaultAddress from "../js/makeDefaultAddress";
import AddAddress from "../../address_book/blocks/AddAddress";
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
      getAddressList().then((response) => {
        if (response?.data) {
          setAddressList(response?.data);
        }
      });
    }
  }, [addAddressListFlag]);
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

  return (
    <>
      <AddAddress
        addAddressFlag={addAddressFlag}
        setAddAddressFlag={setAddAddressFlag}
        setAddAddressListFlag={setAddAddressListFlag}
        editAddressFlag={editAddressFlag}
        editAddressInfo={editAddressInfo}
        setEditAddressFlag={setEditAddressFlag}
        setEditAddressInfo={setEditAddressInfo}
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
              <h5 className="modal-title fs-3 fw-bold " id="userModalLabel">
                CHOOSE ADDRESS
              </h5>
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
                  />
                );
              })}
            </div>
            <div className="row g-2 m-2">
              <div className="col-md-6 col-12">
                <a
                  onClick={(e) => {
                    setAddAddressListFlag(false);
                    $("#addressModal").toggle();
                    $("#addressModal").toggleClass("modal fade modal");
                    setAddAddressFlag(true);
                    $("#AddAddress").toggle();
                    $("#AddAddress").toggleClass("modal fade modal");
                  }}
                >
                  + Add new address
                </a>
              </div>
              <div className="col-md-6 col-12">
                <div className="pt-2 m-2">
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
