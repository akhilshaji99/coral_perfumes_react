import MyAccountSidebar from "../common/MyAccountSidebar";
import BreadCrumps from "../common/BreadCrumps";
import ChangeEmail from "./ChangeEmail";
import ChangePhone from "./ChangePhone";
function index() {
  return (
    <main>
      {/* section */}
      <BreadCrumps />

      <section>
        <div className="container">
          <div className="row">
            <MyAccountSidebar />
            <ChangeEmail />
            <ChangePhone />
            <div className="col-lg-9 col-md-9 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                {/* heading */}
                <h2 className="mb-6">My Personal Info</h2>
                <div className="row">
                  <div className="pe-lg-14">
                    {/* heading */}
                    <form className=" row row-cols-1 row-cols-lg-2">
                      <div className="mb-3 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="mb-3 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="mb-3 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#changeEmail"
                        >
                          Change Email
                        </a>
                      </div>
                      <div className="mb-3 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0559238088"
                        />
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#changePhone"
                        >
                          Change Phone
                        </a>
                      </div>
                      <div className="mb-3 col">
                        <select className="form-control">
                          <option select>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div className="mb-3 col">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="My Birthdays"
                        />
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary">Save</button>
                      </div>
                    </form>
                  </div>
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
