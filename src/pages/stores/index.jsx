import request from "../../utils/request";
import { useEffect, useState } from "react";
import deviceImageRender from "../../utils/deviceImageRender";

function Index() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    getStores();
  }, []);
  const getStores = async () => {
    try {
      const response = await request.get("get_store_details/");
      if (response.data) {
        setStores(response.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <section className="mt-8 mb-lg-14 mb-8">
      <div className="container">
        <div class="row">
          {stores?.map((brand, index) => {
            return (
              <>
                <div class="col-6 ps-0" key={index}>
                  <div class="card mt-5">
                    <div class="flex-fill">
                      <div class="d-flex align-items-center">
                        <div
                          class="col-sm "
                          style={{
                            backgroundImage:
                              `url("` +
                              deviceImageRender(brand.store_listing_image) +
                              `")`,
                            "min-height": "250px",
                          }}
                        >
                          <img
                            src={deviceImageRender(brand.store_listing_image)}

                            // alt={brand.image_alt}
                          />
                        </div>
                        <div
                          class="col-sm bg-dark d-flex" 
                          style={{ "min-height": "250px" }}
                        >
                          <div>
                            <h5 style={{"color":"white"}}>{brand.store_name}</h5>
                            <h5 style={{"color":"white"}}>{brand.emirate_name}</h5>
                            <h5 style={{"color":"white"}}>{brand.store_address}</h5>

                          <button  class="btn btn-white ">
                            visit us{" "}
                          </button>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Index;
