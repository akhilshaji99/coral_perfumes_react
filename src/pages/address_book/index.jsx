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
        <div className="container">
          <div className="row">
            <MyAccountSidebar />
            <AddAddress />
            <div className="col-lg-9 col-md-9 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                {/* heading */}
                <h2 className="mb-6">Address Book</h2>
                <div className="row">
                  {/* col */}
                  <div className="col-lg-12 col-xxl-12 col-12 mb-4">
                    {/* form */}
                    <div className="card">
                      <div className="card-body p-6">
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
                        <div className="mt-4">
                          <a href="#" className="text-inherit">
                            Edit{" "}
                          </a>
                          <a
                            href="#"
                            className="text-danger ms-3"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xxl-12 col-12 mb-4">
                    {/* input */}
                    <div className="card">
                      <div className="card-body p-6">
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="officeRadio"
                          />
                          <label
                            className="form-check-label text-dark fw-semi-bold"
                            htmlFor="officeRadio"
                          >
                            Office
                          </label>
                        </div>
                        {/* nav item */}
                        <p className="mb-6">
                          Nitu Chauhan
                          <br />
                          3853 Coal Road <br />
                          Tannersville, Pennsylvania, 18372, United States{" "}
                          <br />
                          402-776-1106
                        </p>
                        {/* link */}
                        <a href="#" className="link-primary">
                          Set as Default
                        </a>
                        <div className="mt-4">
                          <a href="#" className="text-inherit">
                            Edit{" "}
                          </a>
                          {/* btn */}
                          <a
                            href="#"
                            className="text-danger ms-3"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <label data-bs-toggle="modal" data-bs-target="#AddAddress">
                  + Add New Address
                </label>
                <div class="col-12 text-start">
                  <button class="btn btn-primary" type="button">
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
