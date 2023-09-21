import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
// Import your images
import img01 from "../../assets/custom/images/careers-banner.webp";
import upload1 from "../../assets/custom/images/upload -1img.svg";


function Index() {
  return (
    <>
   <div className="page-new">
        <div className="container-new">
            <div className="title-page">
                <h1>Careers</h1>
            </div>
            <div className="banner-careers">
                <img src={img01} alt="img-banner"/>
            </div>
        </div>
        <section>
            <div className="container-new">
                <div className="retail-sales">
                    <h2>Retail Sales Associate</h2>
                    <span>02/02/2023</span>
                    <h3>Job Description</h3>
                    <p>As a Retail Store Associate, you will play a key role in providing exceptional customer service, ensuring the store's overall cleanliness and organization, and contributing to the achievement of sales goals. Your friendly demeanor, product knowledge, and willingness to assist customers will create a positive shopping experience and foster customer loyalty.
                    </p>
                </div>
                <div className="respons-list">
                    <h3>Responsibilities</h3>
                    <ul>
                        <li>Meet and assist customers in a friendly and professional manner.</li>
                        <li>Provide product information and recommendations to customers.</li>
                        <li>Assist in maintaining the visual appearance of the store, including displays, shelves, and product arrangements.</li>
                        <li>Process customer transactions accurately using the point-of-sale (POS) system.</li>
                        <li>Handle customer inquiries, concerns, and returns with patience and professionalism.</li>
                        <li>Restock shelves and merchandise as needed to ensure product availability.</li>
                        <li>Maintain a clean and organized store environment, including restrooms and common areas.</li>
                        <li>Collaborate with team members to achieve daily and weekly sales targets.</li>

                    
                    </ul>
                </div>
                <div className="apply-form">
                 
                    <form action="#" method="post">
                        <h3>Apply for this position</h3>
                        <div className="form-group">
                            <input type="text" id="first_name" name="first_name" placeholder="First Name" required/>
                            <input type="text" id="last_name" name="last_name" placeholder="Last Name" required/>
                        </div>
                        <div className="form-group">
                            <input type="text" id="E-mail*" name="E-mail" placeholder="E-mail*"/>
                            <input type="text" id="num" name="num" placeholder="055 923 8088"/>
                        </div>
                        <div className="form-group file-upload">
                            <label for="file_input">
                                <img src={upload1} alt="img"/>
                                <div className="upload-top">
                                    <h4>Upload your Resume</h4>
                                    <p>OR</p>
                                     <p>Drag and drop your Resume here</p></div>
                            </label>
                            <input type="file" id="file_input" name="file_upload" accept="image/*"/>
                        </div>
                       
                        <div className="form-group-2 lt-count">
                            <label>Add a cover letter*</label>
                            <input type="text" id="field1" name="field1" placeholder="Add a cover letter"/>
                            <span id="word-count">0/200</span>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Apply"/>
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
