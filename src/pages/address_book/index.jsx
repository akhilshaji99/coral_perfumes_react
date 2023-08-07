import MyAccountSidebar from "../common/MyAccountSidebar";
import BreadCrumps from "../common/BreadCrumps";
import AddAddress from "./blocks/AddAddress";
// import ChangeEmail from "./ChangeEmail";
// import ChangePhone from "./ChangePhone";
function index() {
  return (
    <main>
      {/* section */}
      <BreadCrumps />

      <section>
        <div className="container-fluid">
          <div className="row">
            <MyAccountSidebar />
            <AddAddress />
            <div className="col-lg-9 col-md-9 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                {/* heading */}
                <h2 className="mb-6 text-center my-profile-heading">
                  Address Book
                </h2>
                <div className="row">
                  {/* col */}
                  <div className="col-lg-12 col-xxl-12 col-12 mb-4">
                    {/* form */}
                    <div className="card address-card">
                      <div className="row align-items-center">
                        <div className="col-md-9">
                          <div className="card-body">
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="homeRadio"
                                defaultChecked=""
                              />
                              <label
                                className="form-check-label text-dark fw-semi-bold"
                                htmlFor="homeRadio"
                              >
                                Home
                              </label>
                            </div>
                            {/* address */}
                            <p className="mb-6">
                              Jitu Chauhan
                              <br />
                              4450 North Avenue Oakland, <br />
                              Nebraska, United States,
                              <br />
                              402-776-1106
                            </p>
                          </div>
                          <div className="col-md-3">
                            <a href="#" className="text-inherit">
                              <svg
                                width={11}
                                height={11}
                                viewBox="0 0 11 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.88188 3.63875L7.31621 2.07307M1.30925 9.6457C1.74242 10.0789 2.44175 10.0789 2.87492 9.6457L9.6595 2.86113C10.0927 2.42796 10.0927 1.72863 9.6595 1.29546C9.22633 0.862289 8.527 0.862289 8.09383 1.29546L1.30925 8.08003C0.876083 8.5132 0.876083 9.21253 1.30925 9.6457Z"
                                  stroke="black"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                            <a
                              href="#"
                              className="text-danger ms-3"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteModal"
                            >
                              <svg
                                width={21}
                                height={29}
                                viewBox="0 0 21 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.24173 19.2132L9.72702 27.6985M1.24173 27.6985L9.72702 19.2132"
                                  stroke="black"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <label data-bs-toggle="modal" className="btn-link" data-bs-target="#AddAddress">
                  + Add New Address
                </label>
                <div class="col-12 text-start">
                  <button class="btn btn-dark col-md-2 mt-4" type="button">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default index;
