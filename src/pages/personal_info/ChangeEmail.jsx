import { useState } from "react";
import request from "../../utils/request";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import $ from "jquery";


const emailFormSchema = yup.object().shape({
  email: yup.string().required().email(),
});
function ChangeEmail({setRefetch, profileForm }) {
  const [email, setEmail] = useState("");
  const handleOnSubmit = async (values) => {
    try {
      const response = await request.post("get_user_profile/", {
       ...values
      });

      if (response?.data) {
        $("#changeEmail").toggle();
        $("#changeEmail").toggleClass("modal modal fade");
        $("#changeEmail").hide();
        setRefetch(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateEmailForm = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: emailFormSchema,
    onSubmit: handleOnSubmit,
  });
  return (
    <div
      className="modal fade"
      id="changeEmail"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        {/* modal content */}
        <div className="modal-content">
          {/* modal body */}
          <div className="modal-body p-6">
            <div>
              {/* heading */}
              <h5 className="mb-5 text-center">CHANGE E-Mail</h5>
            </div>
            <div>
              {/* button */}
              <button
                type="button"
                className="btn-close btn-custom-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={(e)=>{
                  $("#changeEmail").toggle();
                  $("#changeEmail").toggleClass("modal fade modal");
                }}
              />
            </div>
            {/* row */}
            <div className="row g-3">
              {/* col */}

              <div className="col-12">
                {/* input */}

                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={profileForm.values.email}
                  placeholder="as@gmail.com"
                />
              </div>
              {/* col */}
              <form onSubmit={updateEmailForm.handleSubmit}>
              <div className="col-12">
                {/* input */}
                <label>New Email</label>

                <input
                  type="text"
                  className={`form-control ${
                    updateEmailForm.errors.email ? "border-danger" : ""
                  }`}
                  required
                  name="email"
                  value={updateEmailForm.values.email}
                  onChange={updateEmailForm.handleChange}
                  placeholder="Email*"
                />
              </div>
              <div className="col-12 text-center my-5">
                <button
                  className="btn btn-dark w-100"
                  // data-bs-dismiss="modal"
                  type="submit"
                  
                >
                  Change
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChangeEmail;
