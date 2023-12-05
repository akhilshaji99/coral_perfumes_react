import React, { useCallback } from "react";
import $ from "jquery";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import request from "../../../utils/request";
import { NavLink } from "react-router-dom";
import LoginOTPModal from "../../login/LoginOTPModal";
import { useNavigate } from "react-router-dom";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object().shape({
  // email: yup.string().email().required(),
  phone_number: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
function GuestLoginModal() {
  const navigate = useNavigate();

  const handleOnSubmit = (values) => {
    // subscribeNewsLetter(values);
    login(values);
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      phone_number: "",
    },

    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  const login = async (values) => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("email", values.email);
      bodyFormData.append("phone_number", values.phone_number);
      const response = await request.post("login/", bodyFormData);
      console.log("response", response);
      let status = "succsss";
      let title = "SUCCESS";
      if (!response.data.status) {
        status = "error";
        title = "ERROR";
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={status}
            title={title}
            message={response.data.message}
          />
        ));
      } else {
        $("document").ready(function () {
          $("#guestLoginModal").toggleClass("modal modal fade");
          $("#guestLoginModal").hide();
          $("#otpModal").toggle();
          $("#otpModal").toggleClass("modal fade modal");
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleModalClose = () => {
    $("#guestLoginModal").toggle();
    $("#guestLoginModal").toggleClass("modal modal fade");
    $("#guestLoginModal").hide();
  };
  return (
    <>
      <LoginOTPModal componentDatas={formik.values} redirectTo={"checkout"} />
      <div
        className="modal fade"
        id="guestLoginModal"
        tabIndex={-1}
        aria-labelledby="guestLoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <button
              type="button"
              className="btn-close"
              onClick={handleModalClose}
            />
            <div className="modal-header border-0 ">
              <h5 className="modal-title text-center" id="userModalLabel">
                CONTINUE AS A GUEST
              </h5>
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
                        error={
                          formik.touched.type && Boolean(formik.errors.type)
                        }
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
                      placeholder="E-mail"
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
                <h5 className="btn-seperator">OR</h5>
              </div>
              {/* <NavLink to={`/login?checkout`}> */}
              <div
                className="col-12 d-grid"
                onClick={() => {
                  $("#guestLoginModal").hide();
                  $("#cartDrawer").hide();
                  navigate("/login?checkout");
                }}
              >
                {" "}
                <button className="btn btn-dark">SIGN UP</button>
              </div>
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GuestLoginModal;
