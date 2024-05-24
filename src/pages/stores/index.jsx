import { useEffect, useState } from "react";
import deviceImageRender from "../../utils/deviceImageRender";
import getStores from "./js/getStores";
import getEmirates from "../checkout/js/getEmiratesList";
import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
import BreadCrumps from "../common/BreadCrumps";
import EmiratesDropdown from "./blocks/EmiratesDropdown";
import { Link } from "react-router-dom";
import getCountries from "../checkout/js/getCountriesList";
import CountriesDropdown from "./blocks/CountriesDropdown";

function Index() {
  const [stores, setStores] = useState([]);
  const [emirates, setEmirates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [emirate, setEmirate] = useState("");
  const [country, setCountry] = useState("");
  const [label, setLabel] = useState("");
  const [countryLabel, setCountryLabel] = useState("");
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);
  const [rerenderKey, setRerenderKey] = useState(0);

  useEffect(() => {
    getEmirates().then((response) => {
      if (response?.data) {
        console.log("emirates", response);
        setEmirates(response?.data);
        // setEmirate(response?.data?.[0].id);
        setLabel("Choose Emirates");
      }
    });
    getCountries().then((response) => {
      if (response?.data) {
        console.log("country:", response);
        setCountries(response?.data);
        // setEmirate(response?.data?.[0].id);
        setCountryLabel("Choose Country");
      }
    });
    getStores().then((response) => {
      if (response?.data) {
        setBreadCrumbDatas(response?.data?.bread_crumb_data);
        setStores(response?.data?.data);
      }
    });
  }, [rerenderKey]);

  useEffect(() => {
    if (country) {
      getStores(country).then((response) => {
        console.log("country store:", response);
        if (response?.data) {
          setStores(response?.data?.data);
          console.log("count store:", stores);
        }
      });
    }
  }, [country, rerenderKey]);

  useEffect(() => {
    if (emirate) {
      console.log("cou, emi", country, emirate);
      getStores(country, emirate).then((response) => {
        console.log("emirate store:", response.data.data);
        if (response?.data) {
          setStores(response?.data?.data);
          console.log("store:", stores);
        }
      });
    }
  }, [emirate, rerenderKey]);

  const handleViewAllClick = () => {
    // Reset country selection
    setCountry("");
    setRerenderKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <div className="page-new">
        <BreadCrumps breadCrumbDatas={breadCrumbDatas} />
        <div className="container-new">
          <div className="choose-row">
            <div className="visit-tittle">
              <h1>Visit us </h1>
            </div>
            <div className="choose-countries">
              <div className=" custom-select">
                <CountriesDropdown
                  setCountry={setCountry}
                  countries={countries}
                  countryLabel={countryLabel}
                  setCountryLabel={setCountryLabel}
                />
              </div>
            </div>
            {country === 1 ? (
              <div className="choose-emirates">
                <div className="custom-select">
                  <EmiratesDropdown
                    setEmirate={setEmirate}
                    emirates={emirates}
                    label={label}
                    setLabel={setLabel}
                  />
                </div>
              </div>
            ) : null}
            <div>
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleViewAllClick}
              >
                View all
              </button>
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
                    <li style={{ width: stores.length === 1 ? "100%" : "" }}>
                      <div className="viisit-img" key={index}>
                        <img
                          src={deviceImageRender(store?.store_listing_image)}
                          alt=""
                        />
                      </div>
                      <div className="visit-text">
                        <div class="ms-9 me-9">
                          <div className="visit-pg">
                            <h2>{store?.store_name} </h2>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: store?.store_address,
                              }}
                            ></p>
                            <p>{store?.store_location}</p>
                          </div>
                          <Link
                            to={`/coral-perfumes-showrooms/${store?.title_slug}`}
                          >
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
