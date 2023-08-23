import $ from "jquery";
import React, { useEffect, useState } from "react";
import getPromoCodes from "../js/getPromoCodes";
import UsePromoCode from "../js/usePromoCode";
import { Alert } from "bootstrap";
function PromoCodeModal({
  showPrmoCodeFlag,
  setShowPrmoCodeFlag,
  setPromoCode,
}) {
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

  const applyPromoCode = (promo_id, code) => {
    setPromoCode(code);
    UsePromoCode(promo_id,null).then((response) => {
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
        className="modal fade promo-modal"
        id="promocodeModal"
        tabIndex={-1}
        aria-labelledby="promocodeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <h1 className="text-center " id="promocodeModalLabel">
              PROMO CODES
            </h1>
            <button
              type="button"
              className="btn-close"
              // data-bs-dismiss="modal"
              // aria-label="Close"
              onClick={handleModalClose}
            />
            <div className="modal-body">
              {promoCodes?.map((code, index) => {
                return (
                  <div className="row" key={index}>
                    {/* col */}
                    {/* form */}
                    <div className="card promo-card">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="card-body">
                            <div className="row align-items-center mb-4">
                              <div className="col-md-8 col-8">
                                <h2>CODE: {code.code}</h2>
                              </div>
                              <div className="col-md-4 col-4 px-0 text-end">
                                <button
                                  class="btn btn-dark  validate w-100"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    applyPromoCode(code.id, code.code);
                                  }}
                                >
                                  Apply
                                </button>{" "}
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
