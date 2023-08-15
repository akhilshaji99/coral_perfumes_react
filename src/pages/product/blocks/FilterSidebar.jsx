import request from "../../../utils/request";
import { useEffect, useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

function FilterSidebar({
  checkCategoryFilter,
  minPrice,
  maxPrice,
  passingDateRangeToParent,
}) {
  const [productFilters, setProductFilters] = useState([]);
  const [categorySearchValue, setCategorySearchValue] = useState(null);
  const [categorySearchKey, setCategorySearchKey] = useState(null);
  const [defaultMin, setDefaultMin] = useState(minPrice);
  const [defaultMax, setDefaultMax] = useState(maxPrice);

  useEffect(() => {
    getProductFilters();
  }, [window.location.href, categorySearchValue]);

  const getProductFilters = async () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const category = queryParameters.get("category");
    try {
      if (category) {
        const response = await request.get(
          "filterable-attributes/" + category,
          {
            categorySearchValue,
            categorySearchKey,
          }
        );
        if (response.data) {
          setProductFilters(response.data.data);
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
  return (
    <>
      <aside className="mb-6 mb-md-0 filter-side">
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
                {productFilters?.map((productFilter, index) => {
                  return (
                    <li className="nav-item border-bottom w-100" key={index}>
                      <a
                        href="#"
                        className="nav-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target={`#categoryFlushOne_${index}`}
                        aria-expanded="false"
                        aria-controls={`categoryFlushOne_${index}`}
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
                        id={`categoryFlushOne_${index}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#categoryCollapseMenu"
                      >
                        <input
                          type="search"
                          className="form-control accordion-search"
                          placeholder="Search"
                          onChange={(event) => {
                            setCategorySearchValue(event.target.value);
                            setCategorySearchKey(productFilter?.name);
                          }}
                        />
                        <div>
                          <ul className="nav flex-custom-column ms-3">
                            {productFilter?.values?.map((filterData, index) => {
                              return (
                                <li className="nav-item" key={index}>
                                  <div className="form-check mb-5">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="eGrocery"
                                      value={filterData?.slug}
                                      onChange={(event) =>
                                        checkCategoryFilter(
                                          event.target.value,
                                          productFilter?.name
                                        )
                                      }
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
                              onChange={getSliderValue}
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
