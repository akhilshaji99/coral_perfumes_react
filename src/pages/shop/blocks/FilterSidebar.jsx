function FilterSidebar() {
  return (
    <>
      <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
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
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body ps-lg-2 pt-lg-0">
            <div className="mb-8">
              <ul className="nav nav-category" id="categoryCollapseMenu">
                <li className="nav-item border-bottom w-100 ">
                  <a
                    href="#"
                    className="nav-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#categoryFlushOne"
                    aria-expanded="false"
                    aria-controls="categoryFlushOne"
                  >
                   Brands
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
                    id="categoryFlushOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#categoryCollapseMenu"
                  >
                    <input
                      type="search"
                      className="form-control accordion-search"
                      placeholder="Search by store"
                    />
                    <div>
                      <ul className="nav flex-column ms-3">
                        <li className="nav-item">
                          <div className="form-check mb-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="eGrocery"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="eGrocery"
                            >
                              Calvin Klien <span>(121)</span>
                            </label>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="form-check mb-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="eGrocery"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="eGrocery"
                            >
                            Davidoff <span>(70)</span>
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
            <div className="mb-8 d-none">
              <h5 className="mb-3">Rating</h5>
              <div>
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
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
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
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
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
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
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
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
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
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
            </div>
            <div className="mb-8 position-relative d-none">
              {/* Banner Design */}
              {/* Banner Content */}
              <div className="position-absolute p-5 py-8">
                <h3 className="mb-0">Fresh Fruits </h3>
                <p>Get Upto 25% Off</p>
                <a href="#" className="btn btn-dark">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
              {/* Banner Content */}
              {/* Banner Image */}
              {/* img */}
              <img
                src="../assets/images/banner/assortment-citrus-fruits.png"
                alt=""
                className="img-fluid rounded "
              />
              {/* Banner Image */}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
export default FilterSidebar;
