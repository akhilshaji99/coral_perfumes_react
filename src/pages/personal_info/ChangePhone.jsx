import { useState } from "react";
import request from "../../utils/request";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";
import $ from "jquery";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const phoneFormSchema = yup.object().shape({
  phone_number: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
function ChangePhone({setRefetch, profileForm }) {
  const [phone_number, setPhone_number] = useState("");
  const handleOnSubmit = async (values) => {
    try {
      const response = await request.post("get_user_profile/", {
       ...values
      });
      if (response.data.status) {
      if (response?.data) {
        $("#changePhone").toggle();
        $("#changePhone").toggleClass("modal modal fade");
        $("#changePhone").hide();
        setRefetch(true);
      }
    }else{
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"CHANGE MOBILE NUMBER"}
          message={response?.data?.message}
        />
      ));
    }
    } catch (error) {
      console.log("error", error);
    }
  };

  const updatePhoneForm = useFormik({
    initialValues: {
      phone_number: "",
    },
    enableReinitialize: true,
    validationSchema: phoneFormSchema,
    onSubmit: handleOnSubmit,
  });
  return (
    <div
      className="modal fade"
      id="changePhone"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        {/* modal content */}
        <div className="modal-content">
          {/* modal body */}
          <div className="modal-body p-6">
              <div>
                {/* heading */}
                <h5 className="mb-5 text-center">CHANGE MOBILE NUMBER</h5>
              </div>
              <div>
                {/* button */}
                <button
                    type="button"
                    className="btn-close btn-custom-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  onClick={(e)=>{
                    $("#changePhone").toggle();
                    $("#changePhone").toggleClass("modal fade modal");
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
                  value={profileForm.values.phone_number}
                  placeholder="9463777767"
                />
              </div>
              {/* col */}
              <form onSubmit={updatePhoneForm.handleSubmit}>

              <div className="col-12">
                {/* input */}
                <label>Add New Number</label>
               
                <input
                  type="text"
                  className={`form-control ${
                    updatePhoneForm.errors.phone_number ? "border-danger" : ""
                  }`}
                  name="phone_number"
                  value={updatePhoneForm.values.phone_number}
                  onChange={updatePhoneForm.handleChange}
                
                  placeholder="Mob Number*"
                />
              </div>
              <div className="col-12 text-center">
                <button
                  className="btn btn-dark w-100 my-5"
                  data-bs-dismiss="modal"
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
export default ChangePhone;
