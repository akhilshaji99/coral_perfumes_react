import img10 from "../../assets/img/prvt/lets-connect.png";
import "../../assets/css/prvt_label.css";
import BreadCrumps from "../common/BreadCrumps";
import request from "../../utils/request";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";
import breadCrumb from "../common/js/breadCrumb";

function ContactForm({ section_status = null }) {
  const [validationMessages, setValidationMessages] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [formDatas, setFormDatas] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    console.log(name);
    setFormDatas((formDatas) => ({
      ...formDatas,
      [name]: value,
    }));
  };

  useEffect(() => {
    breadCrumb().then((response) => {
      setBreadCrumbDatas(response?.bread_crumb_data);
    });
  }, []);
  const validateForm = () => {
    const errors = {};

    if (!formDatas.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formDatas.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formDatas.email)) {
      errors.email = "Invalid email format";
    }

    // if (!formDatas.phone.trim()) {
    //   errors.phone = "Phone number is required";
    // } else if (!/^\d{10}$/.test(formDatas.phone)) {
    //   errors.phone = "Invalid phone number format";
    // }

    setValidationMessages(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setisLoading(true);
      try {
        var formDataToSend = new FormData();
        console.log(formDatas.cv);
        formDataToSend.append("name", formDatas.name);
        formDataToSend.append("email", formDatas.email);
        formDataToSend.append("phone", formDatas.phone);
        formDataToSend.append("message", formDatas.message);
        console.log("formDataToSend", formDataToSend);
        const response = await request.post(
          "api/submit-contact-form/",
          formDataToSend
        );
        if (response?.data?.status) {
          toast((t) => (
            <AlerMessage
              t={t}
              toast={toast}
              status={true}
              title={"Success"}
              message={response?.data?.message}
            />
          ));
          setValidationMessages([]);
          setFormDatas({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          console.log("error", response?.data?.errors);
          setValidationMessages(response?.data?.errors);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setisLoading(false);
      }
    }
  };
  return (
    <>
      {window.location.pathname === "/contact-us" ? (
        <BreadCrumps breadCrumbDatas={breadCrumbDatas} />
      ) : null}
      <div className="container pt-10" id="quick_enq">
        <div className="row ">
          <div className="col-md-12">
            <div className="lets-tittle">
              <h3>Let’s Connect!</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="lets-form">
              <form action="#" method="post" onSubmit={handleSubmit}>
                <div className="form-group  mb-8">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formDatas.name}
                    onChange={handleChange}
                  />
                  <p className="form-validation-message">
                    {validationMessages?.name}
                  </p>
                </div>
                <div className="form-group mb-8">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={formDatas.email}
                    onChange={handleChange}
                  />
                  <p className="form-validation-message">
                    {validationMessages?.email}
                  </p>
                </div>
                <div className="form-group mb-8">
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="055 923 8088"
                    value={formDatas.phone}
                    onChange={handleChange}
                  />
                  <p className="form-validation-message">
                    {validationMessages?.phone}
                  </p>
                </div>
                <div className="form-group mb-8">
                  <textarea
                    className="form-control"
                    id="message"
                    rows={3}
                    placeholder="Your Message"
                    defaultValue={""}
                    name="message"
                    value={formDatas.message}
                    onChange={handleChange}
                  />
                  <p className="form-validation-message">
                    {validationMessages?.message}
                  </p>
                </div>
                {!isLoading ? (
                  <button
                    className="btn btn-dark col-md-6 col-12 address-button"
                    type="submit"
                  >
                    SEND
                  </button>
                ) : (
                  <button
                    className="btn btn-dark col-md-6 col-12 address-button disabled "
                    type="submit"
                  >
                    <span>
                      <>
                        &nbsp;
                        <div
                          class="spinner-border spinner-border-sm "
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </>
                    </span>
                    <span className="m-3"> SENDING... </span>
                  </button>
                )}
              </form>
            </div>
          </div>
          <div className="col-md-6 lest-img">
            <img src={img10} alt="lets-connect" />
          </div>
        </div>
      </div>
      <section className="cont-ad">
        <div className="container">
          <div className="row">
            <div className="col-md-5 private-cs  d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45ZM12 13.46C10.26 13.46 8.84997 12.05 8.84997 10.31C8.84997 8.57 10.26 7.16 12 7.16C13.74 7.16 15.15 8.57 15.15 10.31C15.15 12.05 13.74 13.46 12 13.46Z"
                  fill="black"
                />
              </svg>
              <p>
                {" "}
                Coral Perfumes Industry LLC Office No.9, Ware House No. 13,
                Industrial Area-4, Al Quoz, Dubai. UAE – 186887Land Mark: Near
                Al Ahli Driving School
              </p>
            </div>
            <div className="col-md-4 private_ph">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                  fill="black"
                />
              </svg>
              <div>
                <a href="tel:+971504883041"> +971504883041</a>
                <a href="tel:+971 4 3217 112">+971 4 3217 112</a>
              </div>
            </div>
            <div className="col-md-3 private_mails">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
                  fill="#292D32"
                />
              </svg>
              <div>
                <a href="mailto:info@coralperfumes.com">
                  info@coralperfumes.com
                </a>
                <a href="mailto:operations@coralperfumes.com">
                  operations@coralperfumes.com
                </a>
              </div>
            </div>
          </div>
          {section_status === null ? (
            <div className="row mt-5">
              <div className="col-md-5 d-flex loc-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45ZM12 13.46C10.26 13.46 8.84997 12.05 8.84997 10.31C8.84997 8.57 10.26 7.16 12 7.16C13.74 7.16 15.15 8.57 15.15 10.31C15.15 12.05 13.74 13.46 12 13.46Z"
                    fill="black"
                  />
                </svg>
                <div className="add-heading">
                  <h2>United States America</h2>
                  <p>
                    {" "}
                    Coral Perfumes LLC Coral Springs, florida 33065, United
                    States of America
                  </p>
                  <a href="mailto:info@coralperfumes.com">
                    Email: info@coralperfumes.com
                  </a>
                </div>
              </div>
              <div className="col-md-4 d-flex loc-svg-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45ZM12 13.46C10.26 13.46 8.84997 12.05 8.84997 10.31C8.84997 8.57 10.26 7.16 12 7.16C13.74 7.16 15.15 8.57 15.15 10.31C15.15 12.05 13.74 13.46 12 13.46Z"
                    fill="black"
                  />
                </svg>
                <div className="add-heading">
                  <h2>MYANMAR</h2>
                  <p>
                    {" "}
                    Coral Perfumes myanmar <br></br>
                    yangon, myanmar
                    <br></br>phone: +95 9442652475 <br></br>+95 9973050806
                  </p>
                  <a href="mailto:myanmar@coralperfumes.com">
                    Email:myanmar@coralperfumes.com
                  </a>
                </div>
              </div>
              <div className="col-md-3 d-flex loc-svg-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={80}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.62 8.45C19.57 3.83 15.54 1.75 12 1.75C12 1.75 12 1.75 11.99 1.75C8.45997 1.75 4.41997 3.82 3.36997 8.44C2.19997 13.6 5.35997 17.97 8.21997 20.72C9.27997 21.74 10.64 22.25 12 22.25C13.36 22.25 14.72 21.74 15.77 20.72C18.63 17.97 21.79 13.61 20.62 8.45ZM12 13.46C10.26 13.46 8.84997 12.05 8.84997 10.31C8.84997 8.57 10.26 7.16 12 7.16C13.74 7.16 15.15 8.57 15.15 10.31C15.15 12.05 13.74 13.46 12 13.46Z"
                    fill="black"
                  />
                </svg>
                <div className="add-heading">
                  <h2>INDIA</h2>
                  <p>
                    {" "}
                    Coral Perfumes private limited door no. SIEK 13 Industrial
                    estate kallimel p.o mavelikara, alleppey, kerala,INDIA
                    <br></br>phone: 04792359555
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
export default ContactForm;
