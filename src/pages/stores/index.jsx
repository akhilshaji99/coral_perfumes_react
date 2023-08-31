import { useEffect, useState } from "react";
import deviceImageRender from "../../utils/deviceImageRender";
import CustomDropdown from "./blocks/CustomDropdown";
import getStores from "./js/getStores";
import getEmirates from "../checkout/js/getEmiratesList";

function Index() {
  const [stores, setStores] = useState([]);
  const [emirates, setEmirates] = useState([]);


  
  useEffect(() => {
    getStores().then((response) => {
      if (response.data) {
        setStores(response.data.data);
      }
    });
    getEmirates().then((response) => {
      if(response.data){
        setEmirates(response?.data)
      }
    })
  }, []);
  const applyRelevanceFilter = (id) =>{
    // alert(id)
    console.log(id)
  }
  return (
    <section className="mt-8 mb-lg-14 mb-8">
      <div className="container-lg-fluid mt-5">
        <div className="row">
          {/* col */}
          <div className="col-12">
            <div>
              <div className="mb-8 text-center">
                {/* text */}
                <h1 className="stores-heading mb-0">VISIT US</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end mx-3 mb-3">
          <div className="col-md-12 mr-5 d-flex justify-content-end ">
            <CustomDropdown applyRelevanceFilter={applyRelevanceFilter} filterDatas={emirates}/>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row g-0 ">
            {stores?.map((brand, index) => {
              return (
                <>
                  <div className="col-md-6 col-12" key={index}>
                    <div className="card2 card mb-3">
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-5 col-5">
                          <img
                            src={deviceImageRender(brand.store_listing_image)}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-sm-7 col-7">
                          <div className="card-body">
                            <h5 className="card-title">{brand.store_name}</h5>
                            <p className="card-text">{brand.emirate_name}</p>
                            <p className="card-text d-none d-sm-block">
                              <small>{brand.store_address}</small>
                            </p>
                            <div className="row">
                              <div className="col-md-6 col-12">
                                <button className="btn btn-white w-100 ">
                                  visit us{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-6 col-12   ps-0" key={index}>
                    <div className="card mt-5">
                      <div className="flex-fill">
                        <div className="d-flex align-items-center">
                          <div
                            className="col-sm-6 store-image-frame"
                            style={{
                              backgroundImage:
                                `url("` +
                                deviceImageRender(brand.store_listing_image) +
                                `")`,
                            }}
                          >
                            <img
                              src={deviceImageRender(brand.store_listing_image)}

                              // alt={brand.image_alt}
                            />
                          </div>
                          <div
                            className="col-sm-6 bg-dark d-flex"
                            style={{ "min-height": "250px" }}
                          >
                            <div>
                              <h5 style={{ color: "white" }}>
                                {brand.store_name}
                              </h5>
                              <h5 style={{ color: "white" }}>
                                {brand.emirate_name}
                              </h5>
                              <h5 style={{ color: "white" }}>
                                {brand.store_address}
                              </h5>

                              <button className="btn btn-white ">
                                visit us{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Index;
