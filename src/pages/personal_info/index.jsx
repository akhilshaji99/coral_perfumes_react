import MyAccountSidebar from "../common/MyAccountSidebar";
import BreadCrumps from "../common/BreadCrumps";
import ChangeEmail from "./ChangeEmail";
import ChangePhone from "./ChangePhone";
import { useEffect, useState } from "react";
import { useFormik, getIn } from "formik";
import * as yup from "yup";
import request from "../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from "jquery";
import SaveBirthdayPopup from "./SaveBirthdayPopup";

const prifileFormSchema = yup.object().shape({
  phone_number: yup.string().nullable(),
  first_name: yup.string().required(),
  // last_name: yup.string().required(),
  email: yup.string().nullable(),
  // date_of_birth: yup.string().required(),
  gender: yup.string().required(),
});
function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid red",
    };
  }
}

function Index() {
  const [profile, setProfile] = useState(null);
  const [genders, setGenders] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  // const [isDateSaved, setIsDateSaved] = useState(
  //   localStorage.getItem("isDateSaved") === "true" ? true : false
  // );
  const handleOnSubmit = (values) => {
    saveProfile(values);
  };

  const saveProfile = async (values) => {
    try {
      setLoader(true);
      let formattedDate = null;
      if (values.date_of_birth) {
        const date = new Date(values.date_of_birth);
        formattedDate = date.toLocaleDateString("en-GB");
      }
      const response = await request.post("get_user_profile/", {
        ...values,
        date_of_birth: formattedDate,
      });
      if (response.data.show_popup) {
        setShowConfirmation(true);
        if (response.data.data.date_of_birth) {
          setIsSubmitted(true);
        }
      }
      if (response.data.status) {
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={response.data.status}
            title={"Profile"}
            message={response.data.message}
          />
        ));
        setProfile(response?.data?.data);
        profileForm.setFieldValue({
          ...values,
        });
      } else {
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={response.data.status}
            title={"profile"}
            message={response?.data?.message}
          />
        ));
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("error", error);
    }
  };

  const profileForm = useFormik({
    initialValues: {
      phone_number: "",
      first_name: "",
      // last_name: "",
      email: "",
      gender: "",
      date_of_birth: null,
    },
    enableReinitialize: true,
    validationSchema: prifileFormSchema,
    onSubmit: handleOnSubmit,
    validateOnBlur: true, // Enable validation on blur
    validateOnChange: false,
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    console.log("dob:", date);
    setSelectedDate(date);
    profileForm.setFieldValue("date_of_birth", date);
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (refetch) {
      getProfile();
    }
  }, [refetch]);

  const refetchProfileApi = () => {
    getProfile();
  };

  const getProfile = async () => {
    try {
      const response = await request.post("get_user_profile/");
      if (response.data.data.date_of_birth) {
        setIsSubmitted(true);
      }
      if (response?.data) {
        setBreadCrumbDatas(response?.data?.bread_crumb_data);
        setProfile(response?.data?.data);
        const genderList = response?.data?.data.gender_values;
        var result = Object.keys(genderList).map((key) => [
          key,
          genderList[key],
        ]);
        setGenders(result);
        console.log(genders);
        profileForm.setValues({
          phone_number: response?.data?.data?.phone_number,
          first_name: response?.data?.data?.first_name,
          // last_name: response?.data?.data?.last_name,
          email: response?.data?.data?.email,
          gender: response?.data?.data?.gender,
          date_of_birth: response?.data?.data?.date_of_birth,
        });
        const isoDate = response?.data?.data?.date_of_birth;
        if (isoDate) {
          const dateObject = new Date(isoDate);
          setSelectedDate(dateObject);
        } else {
          setSelectedDate(null);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    console.log("Formik props:", profileForm);
  }, [profileForm]);
  return (
    <main>
      {/* section */}
      <BreadCrumps breadCrumbDatas={breadCrumbDatas} />

      <section>
        <div className="container-fluid">
          <div className="row">
            <MyAccountSidebar />
            <ChangeEmail
              refetchProfileApi={refetchProfileApi}
              profileForm={profileForm}
            />
            <ChangePhone
              profileForm={profileForm}
              refetchProfileApi={refetchProfileApi}
            />
            <div className="col-lg-9 col-md-9 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                {/* heading */}
                <h2 className="mb-6 text-center my-profile-heading">
                  MY PERSONAL INFO
                </h2>
                <div className="row">
                  <div className="pe-lg-14">
                    {/* heading */}
                    <form
                      onSubmit={profileForm.handleSubmit}
                      className=" row row-cols-1 row-cols-md-2"
                    >
                      <div className="mb-30 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          name="first_name"
                          value={profileForm.values.first_name}
                          onChange={profileForm.handleChange}
                          style={getStyles(profileForm.errors, "first_name")}
                        />
                      </div>
                      {/* <div className="mb-30 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          name="last_name"
                          value={profileForm.values.last_name}
                          onChange={profileForm.handleChange}
                          style={getStyles(profileForm.errors, "last_name")}
                        />
                      </div> */}
                      <div className="mb-5 col">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          disabled={true}
                          value={profileForm.values.email}
                          // onChange={profileForm.handleChange}
                          style={getStyles(profileForm.errors, "email")}
                        />
                        <a
                          href="javascript:;"
                          // data-bs-toggle="modal"
                          // data-bs-target="#changeEmail"
                          className="change-btn"
                          onClick={(e) => {
                            $("#changeEmail").toggle();
                            $("#changeEmail").toggleClass("modal fade modal");
                          }}
                        >
                          Change Email
                        </a>
                      </div>
                      <div className="mb-5 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          name="phone_number"
                          disabled={true}
                          value={profileForm.values.phone_number}
                          // onChange={profileForm.handleChange}
                          style={getStyles(profileForm.errors, "phone_number")}
                        />
                        <a
                          href="javascript:;"
                          // data-bs-toggle="modal"
                          // data-bs-target="#changePhone"
                          className="change-btn"
                          onClick={(e) => {
                            $("#changePhone").toggle();
                            $("#changePhone").toggleClass("modal fade modal");
                          }}
                        >
                          Change Phone
                        </a>
                      </div>
                      <div className="mb-30 col">
                        <select
                          className="form-control"
                          name="gender"
                          value={profileForm.values.gender}
                          onChange={profileForm.handleChange}
                          style={getStyles(profileForm.errors, "gender")}
                        >
                          {genders?.map((gender, index) => {
                            return (
                              <option value={gender[0]}>{gender[1]}</option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="mb-30 col birthday-div">
                        {isSubmitted ? (
                          // If form is submitted, display the selected date and "My Birthday" text
                          <>
                            <input
                              type="text"
                              className="form-control"
                              value={
                                selectedDate
                                  ? selectedDate.toLocaleDateString("en-GB")
                                  : ""
                              }
                              readOnly
                            />
                            <span className="birthday">My Birthday</span>
                          </>
                        ) : (
                          // Otherwise, display the date picker
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            showYearDropdown
                            showMonthDropdown
                            dateFormatCalendar="MMMM"
                            yearDropdownItemNumber={100}
                            scrollableYearDropdown
                            placeholderText="My Birthday"
                            maxDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            style={{ width: "100%" }}
                          />
                        )}
                      </div>
                      <div className="d-flex justify-content-center w-100">
                        <div className="col-md-3 text-center btn-100">
                          <button type="submit" className="btn btn-dark w-100">
                            {loader ? (
                              <>
                                &nbsp;
                                <div
                                  className="spinner-border spinner-border-sm"
                                  role="status"
                                >
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              </>
                            ) : (
                              "Save"
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                    <SaveBirthdayPopup
                      show={showConfirmation}
                      setShowConfirmation={setShowConfirmation}
                      // setIsDateSaved={setIsDateSaved}
                      setIsSubmitted={setIsSubmitted} // Pass setIsDateSaved to the popup
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Index;
