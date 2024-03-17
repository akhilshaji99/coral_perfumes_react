import request from "../../../utils/request";
import { useEffect, useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { useParams } from "react-router-dom";
import TextBoxClose from "../../../assets/icons/textbox_close.svg";

function FilterSidebar({
  checkCategoryFilter,
  minPrice,
  maxPrice,
  passingDateRangeToParent,
  filterArray,
  unselectAll,
  currentPage,
  sidebarFixedStatus,
}) {
  const urlParams = useParams([]);

  const [productFilters, setProductFilters] = useState([]);
  // const [orgProductFilters, setOrgProductFilters] = useState([]);
  const [categorySearchValue, setCategorySearchValue] = useState(null);
  const [categorySearchKey, setCategorySearchKey] = useState(null);
  const [defaultMin, setDefaultMin] = useState(minPrice);
  const [defaultMax, setDefaultMax] = useState(maxPrice);
  const [status, setStatus] = useState(false);
  const [hideSearchIcon, setHideSearchIcon] = useState(false);
  const [searchTermString, setSearchTermString] = useState("");
  const [sideFixedClass, setSideFixedClass] = useState("");

  useEffect(() => {
    getProductFilters();
  }, [window.location.href, categorySearchValue]);

  const getProductFilters = async () => {
    try {
      let link_split = window.location.href.split("?");
      if (urlParams?.link_type && urlParams?.link_value) {
        const response = await request.post(
          "filterable-attributes/" +
            urlParams?.link_type +
            "/" +
            urlParams?.link_value,
          {
            link_filter: link_split.length > 1 ? link_split[1] : "",
          }
        );
        if (response.data) {
          setProductFilters(response?.data?.data);
          localStorage.setItem(
            "originalFilterDatas",
            JSON.stringify(response?.data?.data)
          );

          // setOrgProductFilters(response?.data?.data);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getSliderValue = (value) => {
    setDefaultMin(value[0]);
    setDefaultMax(value[1]);
    passingDateRangeToParent({ min: value[0], max: value[1] });
  };
  const changeMinMaxValue = (value) => {
    setDefaultMin(value[0]);
    setDefaultMax(value[1]);
  };

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 90) {
      // console.log("fixed");
      setSideFixedClass("filter-side");
    } else {
      setSideFixedClass("");
    }
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    if (scrollTop + windowHeight >= scrollHeight - 400) {
      setSideFixedClass("");
    }
    // else {
    //   setSideFixedClass("filter-side");
    // }
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <aside className={`mb-6 mb-md-0 ${sideFixedClass}`}>
        <div
          className="offcanvas offcanvas-start offcanvas-collapse w-md-50 "
          tabIndex={-1}
          id="offcanvasCategory"
          aria-labelledby="offcanvasCategoryLabel"
        >
          <div className="offcanvas-header d-lg-none">
            <h5 className="offcanvas-title" id="offcanvasCategoryLabel">
              Filter
            </h5>
            <a
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <svg
                width={6}
                height={7}
                viewBox="0 0 6 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.711605 0.794684L5.40265 5.78737M0.711605 5.78737L5.40265 0.794684"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="offcanvas-body scroll-container ps-lg-2 pt-lg-0">
            <div className="mb-8">
              <ul className="nav nav-category" id="categoryCollapseMenu">
                {productFilters?.map((productFilter, main_index) => {
                  return (
                    <li
                      className="nav-item border-bottom w-100"
                      key={main_index}
                    >
                      <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target={`#categoryFlushOne_${main_index}`}
                        aria-expanded="false"
                        aria-controls={`categoryFlushOne_${main_index}`}
                      >
                        {productFilter?.name}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      {/* accordion collapse */}
                      <div
                        id={`categoryFlushOne_${main_index}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#categoryCollapseMenu"
                      >
                        {productFilter?.search_flag ? (
                          <div className="form-group has-search ">
                            {!hideSearchIcon ? (
                              <span className=" form-control-feedback">
                                <svg
                                  width={25}
                                  height={24}
                                  viewBox="0 0 25 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.4843 17.9577L18.1652 17.4877L17.7396 17.8638C15.8035 19.5746 13.276 20.4657 10.6929 20.3479C8.10971 20.2301 5.67419 19.1127 3.90245 17.2329C2.13074 15.3531 1.16201 12.8585 1.20135 10.2781C1.24068 7.69757 2.28499 5.23361 4.11319 3.40847C5.94142 1.5833 8.40988 0.54043 10.9954 0.501151C13.581 0.461872 16.0801 1.42928 17.9632 3.19808C19.8462 4.96686 20.9651 7.39797 21.083 9.97607C21.201 12.5542 20.3088 15.0769 18.5952 17.0097L18.2825 17.3623L18.616 17.6952L18.8688 17.9476L23.9236 22.9939L23.9372 23.0075L23.9518 23.02L24.1483 23.1882L24.1493 23.189C24.1653 23.2026 24.1781 23.2195 24.1869 23.2385L24.6408 23.0287L24.1869 23.2385C24.1957 23.2575 24.2002 23.2781 24.2002 23.2989C24.2002 23.3197 24.1957 23.3403 24.1869 23.3593L24.6408 23.5691L24.1869 23.3593C24.1781 23.3782 24.1653 23.3952 24.1493 23.4088L24.1253 23.4292L24.1041 23.4524C24.0905 23.4673 24.0739 23.4793 24.0553 23.4875C24.0366 23.4957 24.0165 23.5 23.996 23.5C23.9756 23.5 23.9554 23.4957 23.9368 23.4875C23.9182 23.4793 23.9015 23.4673 23.8879 23.4524L23.8819 23.4458L23.8756 23.4394L18.6523 18.1127L18.6172 18.0769L18.5755 18.0487C18.5396 18.0244 18.5086 17.9935 18.4843 17.9577Z"
                                    stroke="black"
                                    strokeMiterlimit={10}
                                  />
                                  <path
                                    d="M10.6494 3.14178C12.4944 3.30632 14.2331 4.09401 15.5904 5.38027C16.7776 6.54131 17.5908 8.04342 17.9221 9.68724"
                                    stroke="black"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </span>
                            ) : null}
                            {hideSearchIcon ? (
                              <img
                                src={TextBoxClose}
                                style={{ cursor: "pointer" }}
                                className="product-search-icon-close"
                                onClick={() => {
                                  setHideSearchIcon(false);
                                  setSearchTermString("");
                                  const filtered = JSON.parse(
                                    localStorage.getItem("originalFilterDatas")
                                  )[main_index]?.values.filter((entry) =>
                                    Object.values(entry).some(
                                      (val) =>
                                        typeof val === "string" &&
                                        val.toLowerCase().includes("")
                                    )
                                  );
                                  productFilters[main_index]["values"] =
                                    filtered;
                                  setProductFilters(productFilters);
                                  setStatus(!status);
                                }}
                              />
                            ) : null}
                            <input
                              type="text"
                              className="form-control accordion-search"
                              placeholder="Search"
                              value={searchTermString}
                              onChange={(event) => {
                                const searchTerm =
                                  event.target.value.toLowerCase(); // Convert search term to lowercase for case-insensitive search
                                setSearchTermString(searchTerm);
                                setHideSearchIcon(false);
                                if (searchTerm.length > 0) {
                                  setHideSearchIcon(true);
                                }
                                const filtered = JSON.parse(
                                  localStorage.getItem("originalFilterDatas")
                                )[main_index]?.values.filter((entry) =>
                                  Object.values(entry).some(
                                    (val) =>
                                      typeof val === "string" &&
                                      val.toLowerCase().includes(searchTerm)
                                  )
                                );
                                productFilters[main_index]["values"] = filtered;
                                setProductFilters(productFilters);
                                setStatus(!status);
                              }}
                            />
                          </div>
                        ) : null}
                        {filterArray[productFilter?.name]?.length > 0 ? (
                          <a
                            className="unselect mb-4"
                            onClick={() => {
                              unselectAll(productFilter?.name);
                            }}
                          >
                            Unselect all
                          </a>
                        ) : null}

                        <div className="side-scroller">
                          <ul className="nav flex-custom-column ms-3 mt-3">
                            {productFilter?.values?.map((filterData, index) => {
                              return (
                                <li className="nav-item" key={index}>
                                  <div
                                    className="form-check mb-5"
                                    onClick={() => {
                                      checkCategoryFilter(
                                        filterData?.slug,
                                        productFilter?.name
                                      );
                                    }}
                                  >
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id={"chk_box_" + index}
                                      checked={filterArray[
                                        productFilter?.name
                                      ]?.includes(filterData?.slug)}
                                      value={filterData?.slug}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="eGrocery"
                                    >
                                      {filterData?.name}{" "}
                                      <span>({filterData?.count})</span>
                                    </label>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
                <li className="nav-item border-bottom w-100">
                  <a
                    href="#"
                    className="nav-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target={`#categoryFlushOne_price`}
                    aria-expanded="false"
                    aria-controls={`categoryFlushOne_price`}
                  >
                    Price
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div
                    id={`categoryFlushOne_price`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#categoryCollapseMenu"
                  >
                    <div>
                      <ul className="nav flex-column ms-3">
                        <li className="nav-item">
                          <div className="form-check mb-5">
                            <Slider
                              range
                              allowCross={false}
                              min={minPrice}
                              max={maxPrice}
                              defaultValue={[
                                defaultMin || minPrice,
                                defaultMax || maxPrice,
                              ]}
                              onAfterChange={getSliderValue}
                              onChange={changeMinMaxValue}
                            />

                            <label className="form-check-label">
                              Min: {defaultMin || minPrice}
                            </label>
                            <label className="form-check-label">
                              Max: {defaultMax || maxPrice}
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* rating */}
            {/* <div className="mb-8 d-none">
              <h5 className="mb-3">Rating</h5>
              <div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingFive"
                  />
                  <label className="form-check-label" htmlFor="ratingFive">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingFour"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="ratingFour">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star text-warning" />
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingThree"
                  />
                  <label className="form-check-label" htmlFor="ratingThree">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingTwo"
                  />
                  <label className="form-check-label" htmlFor="ratingTwo">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingOne"
                  />
                  <label className="form-check-label" htmlFor="ratingOne">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                  </label>
                </div>
              </div>
            </div> */}
            {/* <div className="mb-8 position-relative d-none">
              <div className="position-absolute p-5 py-8">
                <h3 className="mb-0">Fresh Fruits </h3>
                <p>Get Upto 25% Off</p>
                <a href="#" className="btn btn-dark">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
              <img
                src="../assets/images/banner/assortment-citrus-fruits.png"
                alt=""
                className="img-fluid rounded "
              />
            </div> */}
          </div>
        </div>
      </aside>
    </>
  );
}
export default FilterSidebar;
