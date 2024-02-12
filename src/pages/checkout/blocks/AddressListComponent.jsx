import React, { useEffect, useState } from "react";
import getAddressList from "../js/getAddressList";
import deleteUserAddress from "../js/deleteUserAddress";
function AddressListComponent({
  componentDatas,
  defaultAddress,
  setDefaultAddress,
  editAddress,
  setAddAddressListFlag,
}) {
  const onOptionChange = (e) => {
    setDefaultAddress(e.target.value);
  };
  useEffect(() => {
    if (componentDatas.default_address) {
      setDefaultAddress(componentDatas.id);
    }
  }, []);
  return (
    <div className="row">
      {/* col */}
      <div className="col-lg-12 col-xxl-12 col-12 mb-4">
        {/* form */}
        <div className="card address-card">
          <div className="row align-items-center">
            <div className="col-md-9 col-9">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-1 col-md-2 col-1 justify-content-end">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="address"
                        value={componentDatas.id}
                        id="homeRadio"
                        onChange={onOptionChange}
                        checked={componentDatas.id == defaultAddress}
                      />
                      {/* <label
                      className="form-check-label text-dark fw-semi-bold"
                      htmlFor="homeRadio"
                    >
                      Home
                    </label> */}
                    </div>
                  </div>
                  <div className="col-lg-11 col-md-10 col-9 px-lg-0">
                    {/* address */}
                    <p className="mb-0">
                      {componentDatas.full_name}
                      <br />
                      {componentDatas.address}
                      <br />
                      {componentDatas.street_address},{" "}
                      {componentDatas.zajel_city} (
                      {componentDatas?.phone_country_code}),
                      <br />
                      {componentDatas.phone_number} <br />
                      {componentDatas?.email} <br/>
                      {componentDatas?.address_home_office === "1"
                        ? "Home"
                        : "Work"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-3 text-center">
              <div className="row">
                <div className="col-md-12">
                  <a
                    onClick={(e) => {
                      editAddress(componentDatas);
                    }}
                  >
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.88188 3.63875L7.31621 2.07307M1.30925 9.6457C1.74242 10.0789 2.44175 10.0789 2.87492 9.6457L9.6595 2.86113C10.0927 2.42796 10.0927 1.72863 9.6595 1.29546C9.22633 0.862289 8.527 0.862289 8.09383 1.29546L1.30925 8.08003C0.876083 8.5132 0.876083 9.21253 1.30925 9.6457Z"
                        stroke="black"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                {!componentDatas.default_address ? (
                  <div className="col-md-12">
                    <a
                      onClick={(e) => {
                        setAddAddressListFlag(false);

                        deleteUserAddress(componentDatas.id).then(
                          (response) => {
                            setAddAddressListFlag(true);
                          }
                        );
                      }}
                      className="text-danger "
                      // data-bs-toggle="modal"
                      // data-bs-target="#deleteModal"
                      style={{ marginLeft: "10px" }}
                    >
                      <svg
                        width={21}
                        height={29}
                        viewBox="0 0 21 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.24173 19.2132L9.72702 27.6985M1.24173 27.6985L9.72702 19.2132"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddressListComponent;
