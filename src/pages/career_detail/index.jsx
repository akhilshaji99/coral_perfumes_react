import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
// Import your images
import img01 from "../../assets/custom/images/careers-banner.webp";
import upload1 from "../../assets/custom/images/upload -1img.svg";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import request from "../../utils/request";
import deviceImageRender from "../../utils/deviceImageRender";
import BreadCrumps from "../common/BreadCrumps";
import toast from "react-hot-toast";
import AlerMessage from "../common/AlerMessage";

function Index() {
  const [banners, setBanners] = useState({});
  const [jobDetails, setJobDetails] = useState({});
  const [validationMessages, setValidationMessages] = useState(null);
  // const [submitStatus, setSubmiStatus] = useState(false);

  const urlParams = useParams([]);
  useEffect(() => {
    getCareerDetails();
  }, []);
  const getCareerDetails = async () => {
    try {
      const response = await request.get("job-detail/" + urlParams?.id + "/");
      if (response.data) {
        setBanners(response.data.banner_image);
        setJobDetails(response.data.job_details);
        console.log("jobDetails", jobDetails);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const [formDatas, setFormDatas] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    cv: null,
    cover_letter: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormDatas((formDatas) => ({
      ...formDatas,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var formDataToSend = new FormData();
      console.log(formDatas.cv);
      formDataToSend.append("first_name", formDatas.first_name);
      formDataToSend.append("last_name", formDatas.last_name);
      formDataToSend.append("email", formDatas.email);
      formDataToSend.append("mobile", formDatas.mobile);
      formDataToSend.append("cv", formDatas.cv);
      formDataToSend.append("cover_letter", formDatas.cover_letter);
      console.log("formDataToSend", formDataToSend);
      const response = await request.post("job-application/", formDataToSend);
      if (response?.data?.status) {
        // setSubmiStatus(true);
        toast((t) => (
          <AlerMessage
            t={t}
            toast={toast}
            status={true}
            title={"Success"}
            message={response?.data?.message_1}
          />
        ));
        setFormDatas({
          first_name: "",
          last_name: "",
          email: "",
          mobile: "",
          cv: null,
          cover_letter: "",
        });
        setValidationMessages(null)
      } else {
        setValidationMessages(response?.data?.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="page-new">
        <BreadCrumps />
        <div className="container-new">
          <div className="title-page">
            <h1>Careers</h1>
          </div>
          <div className="banner-careers">
            {banners?.banner_image ? (
              <img
                src={deviceImageRender(banners?.banner_image)}
                alt="img-banner"
              />
            ) : null}
          </div>
        </div>
        <section>
          <div className="container-new">
            <div className="retail-sales">
              <h2>{jobDetails?.job_title}</h2>
              <span>{jobDetails?.last_date}</span>
              {/* <h3>{jobDetails?.last_date}</h3> */}
              <p>{jobDetails?.job_description}</p>
            </div>
            <div className="respons-list">
              <h3>Responsibilities</h3>
              {/* <ul>
                        <li>Meet and assist customers in a friendly and professional manner.</li>
                        <li>Provide product information and recommendations to customers.</li>
                        <li>Assist in maintaining the visual appearance of the store, including displays, shelves, and product arrangements.</li>
                        <li>Process customer transactions accurately using the point-of-sale (POS) system.</li>
                        <li>Handle customer inquiries, concerns, and returns with patience and professionalism.</li>
                        <li>Restock shelves and merchandise as needed to ensure product availability.</li>
                        <li>Maintain a clean and organized store environment, including restrooms and common areas.</li>
                        <li>Collaborate with team members to achieve daily and weekly sales targets.</li>

                    
                    </ul> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: jobDetails?.job_responsibilities,
                }}
              ></div>
            </div>
            <div className="apply-form">
              <form action="#" method="post" onSubmit={handleSubmit}>
                <h3>Apply for this position</h3>
                <div className="form-group">
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    value={formDatas.first_name}
                    onChange={handleChange}
                    className="is-invalid"
                  />
                  <p className="form-validation-message">
                    {validationMessages?.first_name}
                  </p>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formDatas.last_name}
                    onChange={handleChange}
                  />
                  <p className="form-validation-message">
                    {validationMessages?.last_name}
                  </p>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail*"
                    value={formDatas.email}
                    onChange={handleChange}
                  />
                  <p className="form-validation-message">
                    {validationMessages?.email}
                  </p>
                  <input
                    type="text"
                    id="num"
                    name="mobile"
                    placeholder="055 923 8088"
                    value={formDatas.mobile}
                    onChange={handleChange}
                  />
                  <p className="form-validation-message">
                    {validationMessages?.mobile}
                  </p>
                </div>
                <div className="form-group file-upload">
                  <label for="file_input">
                    <img src={upload1} alt="img" />
                    <div className="upload-top">
                      <h4>Upload your Resume (pdf)</h4>
                      <p>OR</p>
                      <p>
                        {formDatas?.cv?.name
                          ? formDatas?.cv?.name
                          : "Drag and drop your Resume here"}
                      </p>
                    </div>
                    <p className="form-validation-message">
                      {validationMessages?.cv}
                    </p>
                  </label>
                  <input
                    type="file"
                    id="file_input"
                    name="cv"
                    accept=""
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group-2 lt-count">
                  <label>Add a cover letter*</label>
                  <input
                    type="text"
                    name="cover_letter"
                    placeholder="Add a cover letter"
                    value={formDatas.cover_letter}
                    onChange={handleChange}
                  />
                  <span id="word-count">0/200</span>
                </div>
                <div className="form-group">
                  <input type="submit" value="Apply" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Index;
