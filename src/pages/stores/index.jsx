import { useEffect, useState } from "react";
import deviceImageRender from "../../utils/deviceImageRender";
import getStores from "./js/getStores";
import getEmirates from "../checkout/js/getEmiratesList";
import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
import BreadCrumps from "../common/BreadCrumps";
import EmiratesDropdown from "./blocks/EmiratesDropdown";
import { Link } from "react-router-dom";

function Index() {
  const [stores, setStores] = useState([]);
  const [emirates, setEmirates] = useState([]);
  const [emirate, setEmirate] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    getEmirates().then((response) => {
      if (response?.data) {
        setEmirates(response?.data);
        setEmirate(response?.data?.[0].id);
        setLabel(response?.data?.[0].name);
      }
    });
  }, []);

  useEffect(() => {
    if (emirate) {
      getStores(emirate).then((response) => {
        if (response?.data) {
          setStores(response?.data?.data);
        }
      });
    }
  }, [emirate]);

  return (
    <>
      <div className="page-new">
        <BreadCrumps />
        <div className="container-new">
          <div className="choose-row">
            <div className="visit-tittle">
              <h1>Visit us </h1>
            </div>
            <div className="choose-emirates">
              <div className=" custom-select">
                <EmiratesDropdown
                  setEmirate={setEmirate}
                  emirates={emirates}
                  label={label}
                  setLabel={setLabel}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="visit-section">
          <div className="container-new">
            {/*-row 1*/}
            <div className="visit-row">
              <ul>
                {stores?.map((store, index) => {
                  return (
                    <li>
                      <div className="viisit-img" key={index}>
                        <img
                          src={deviceImageRender(store?.store_listing_image)}
                          alt=""
                        />
                      </div>
                      <div className="visit-text">
                        <div class="ms-9 me-9">
                          <h2>{store?.store_name} </h2>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: store?.store_address,
                            }}
                          ></p>
                          <p>{store?.store_location}</p>
                          <Link to={`/stores-detail/${store?.id}`}>
                            VISIT US{" "}
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Index;
