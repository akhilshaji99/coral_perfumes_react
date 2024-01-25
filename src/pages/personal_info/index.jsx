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

const prifileFormSchema = yup.object().shape({
  phone_number: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
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

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    profileForm.values.date_of_birth = date;
  };

  const handleOnSubmit = async (values) => {
    try {
      const date = new Date(values.date_of_birth);
      const formattedDate = date.toLocaleDateString("en-GB");
      const response = await request.post("get_user_profile/", {
        ...values,
        date_of_birth: formattedDate,
      });
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
    } catch (error) {
      console.log("error", error);
    }
  };

  const profileForm = useFormik({
    initialValues: {
      phone_number: "",
      first_name: "",
      last_name: "",
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
      if (response?.data) {
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
          last_name: response?.data?.data?.last_name,
          email: response?.data?.data?.email,
          gender: response?.data?.data?.gender,
          date_of_birth: response?.data?.data?.date_of_birth,
        });
        const isoDate = response?.data?.data?.date_of_birth;
        const dateObject = new Date(isoDate);
        setSelectedDate(dateObject);
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
      <BreadCrumps />

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
                      <div className="mb-30 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          name="last_name"
                          value={profileForm.values.last_name}
                          onChange={profileForm.handleChange}
                          style={getStyles(profileForm.errors, "last_name")}
                        />
                      </div>
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
                          placeholder=""
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
                      <div className="mb-30 col">
                        {/* <input
                          type="date"
                          className="form-control"
                          placeholder="My Birthdays"
                          name="date_of_birth"
                          value={profileForm.values.date_of_birth}
                          onChange={profileForm.handleChange}
                          // style={getStyles(profileForm.errors, "date_of_birth")}

                        /> */}
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
                          isClearable
                          className="form-control"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="d-flex justify-content-center w-100">
                        <div className="col-md-3 text-center btn-100">
                          <button type="submit" className="btn btn-dark w-100">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* <div className="row justify-content-center">
                      <div className="col-md-3 text-center">
                        <button className="btn btn-dark w-100" >Save</button>
                      </div>
                    </div> */}
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
