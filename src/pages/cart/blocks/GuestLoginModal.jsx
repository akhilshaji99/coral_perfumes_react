import React, { useCallback } from "react";
import $ from "jquery";

import { NavLink} from "react-router-dom";

function GuestLoginModal({ formik ,setInputValue}) {
  const handleModalClose = () => {
    $("#guestLoginModal").toggle();
    $("#guestLoginModal").toggleClass("modal modal fade");
    $("#guestLoginModal").hide();
  };
  return (
    <div
      className="modal fade"
      id="guestLoginModal"
      tabIndex={-1}
      aria-labelledby="guestLoginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header border-0 ">
            <h5 className="modal-title fs-3 fw-bold " id="userModalLabel">
              CONTINUE AS A GUEST
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
            <form onSubmit={formik.handleSubmit}>
              <div className="row g-3">
                {/* col */}
                <div className="col-12 mb-5">
                  <div className="password-field position-relative">
                    <input
                      type="text"
                      id="phone_number"
                      placeholder="055 923 8088*"
                      className={`form-control ${
                        formik.errors.phone_number ? "border-danger" : ""
                      }`}
                      required
                      value={formik.values.phone_number}
                      onChange={(e) =>
                        setInputValue("phone_number", e.target.value)
                      }
                      error={formik.touched.type && Boolean(formik.errors.type)}
                    />
                    <span>
                      <i id="passwordToggler" className="bi bi-eye-slash" />
                    </span>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  {/* input */}
                  <input
                    type="email"
                    className={`form-control ${
                      formik.errors.email ? "border-danger" : ""
                    }`}
                    id="inputEmail4"
                    placeholder="E-mail*"
                    required
                    value={formik.values.email}
                    onChange={(e) => setInputValue("email", e.target.value)}
                  />
                </div>
               
                {/* btn */}
                <div className="col-12 d-grid">
                  {" "}
                  <button type="submit" className="btn btn-dark">
                    CONTINUE
                  </button>
                </div>
                
                {/* text */}
              </div>
            </form>
            <div className="text-center">
                  
                  <h5>OR</h5>
                  
                </div>
                <NavLink to={`/login?checkout`}>

                <div className="col-12 d-grid">
                  {" "}
                  <button className="btn btn-dark">
                    SIGN UP
                  </button>
                </div>
                </NavLink>

          </div>
         
        </div>
      </div>
    </div>
  );
}
export default GuestLoginModal;
