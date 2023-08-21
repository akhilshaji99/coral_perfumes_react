import $ from "jquery";
import React, { useEffect, useState } from "react";
import getPromoCodes from "../js/getPromoCodes";
import UsePromoCode from "../js/usePromoCode";
import { Alert } from "bootstrap";
function PromoCodeModal({ showPrmoCodeFlag, setShowPrmoCodeFlag }) {
  const [promoCodes, setPromoCodes] = useState([]);

  useEffect(() => {
    if (showPrmoCodeFlag) {
      getPromoCodes().then((response) => {
        if (response?.data) {
          setPromoCodes(response?.data);
        }
      });
    }
  }, [showPrmoCodeFlag]);

  const applyPromoCode = (promo_id) => {
    UsePromoCode(promo_id).then((response) => {
      setShowPrmoCodeFlag(false);
      $("#promocodeModal").toggle();
      $("#promocodeModal").toggleClass("modal modal fade");
      $("#promocodeModal").hide();
    });
  };

  const handleModalClose = () => {
    setShowPrmoCodeFlag(false);
    $("#promocodeModal").toggle();
    $("#promocodeModal").toggleClass("modal modal fade");
    $("#promocodeModal").hide();
  };

  return (
    <>
      <div
        className="modal fade"
        id="promocodeModal"
        tabIndex={-1}
        aria-labelledby="promocodeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5
                className="modal-title fs-3 fw-bold "
                id="promocodeModalLabel"
              >
                PROMO CODES
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
              {promoCodes?.map((code, index) => {
                return (
                  <div className="row" key={index}>
                    {/* col */}
                    <div className="col-lg-12 col-xxl-12 col-12 mb-4">
                      {/* form */}
                      <div className="card address-card">
                        <div className="row align-items-center">
                          <div className="col-md-12">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md">
                                  <p>CODE: {code.code}</p>
                                </div>
                                <div className="col-md px-0">
                                  <button
                                    class="btn btn-dark  validate w-100"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      applyPromoCode(code.id);
                                    }}
                                  >
                                    Apply
                                  </button>
                                </div>
                              </div>
                              <div className="row">
                                <p>{code.display_message}</p>
                              </div>
                              <div className="row">
                                <a href="" style={{ color: "black" }}>
                                  Terms & Conditions
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PromoCodeModal;
