import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
// Import your images
import img01 from "../../assets/custom/images/careers-banner.webp";
import img02 from "../../assets/custom/images/careers-img.png";


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
        <section className="carrer-sect">
            <div className="container-new">
                <div className="carrer-listing">
                        <div className="sales-list">
                            <h3>Sales </h3>
                            <ul>
                                <li><a href="#">Retail Sales Associate</a></li>
                                <li><a href="#">Account Executive/Manager</a></li>
                                <li><a href="#">Inside Sales Representative</a></li>
                                <li><a href="#">Inside Sales Representative</a></li>
                                <li><a href="#">Sales Manager</a></li>
                            </ul>
                        </div>
                        <div className="marketing-list">
                            <h3>Marketing</h3>
                            <ul>
                                <li><a href="#">Retail Sales Associate</a></li>
                                <li><a href="#">Account Executive/Manager</a></li>
                                <li><a href="#">Inside Sales Representative</a></li>
                                <li><a href="#">Sales Manager</a></li>
                            </ul>
                        </div>
                        <div className="finance-list">
                            <h3>Finance</h3>
                            <ul>
                                <li><a href="#">Retail Sales Associate</a></li>
                                <li><a href="#">Account Executive/Manager</a></li>
                                <li><a href="#">Sales Manager</a></li>
                            </ul>
                            
                        </div>
                        <div className="corporate-list">
                            <h3>Corporate & Purchase </h3>
                            <ul>
                                <li><a href="#">Sourcing Analyst</a></li>
                                <li><a href="#">Logistics Coordinator</a></li>
                                
                            </ul>
                        </div>
                        <div className="corporate-list">
                            <h3>Corporate & Purchase </h3>
                            <ul>
                                <li><a href="#">Quality Control Manager</a></li>
                                <li><a href="#">Inventory Manager:</a></li>
                            </ul>
                        </div>
                        <div className="corporate-list">
                            <h3>Corporate & Purchase </h3>
                            <ul>
                                <li><a href="#">Purchasing Manager</a></li>
                                <li><a href="#">Logistics Coordinator</a></li>
                                
                            </ul>
                        </div>
                </div>
            </div>
        </section>
        <section className="career-detail-sect">
            <div className="container-new">
                <div className="career-review">
                    <div className="career-review-img">
                       
                <img src={img02} alt="img"/>

                    </div>
                    <div className="career-review-text lg-none">
                        
                             <h3> it's a journey into the world of <span>sensory delight</span></h3>
                            <p>“Explore our diverse range of collections, from the ethereal Floral Symphony . Each collection is a symphony of notes, carefully composed to awaken your senses and tell a unique story on your skin”</p>
                       
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  );
}
export default Index;
