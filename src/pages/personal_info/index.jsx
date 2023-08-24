import MyAccountSidebar from "../common/MyAccountSidebar";
import BreadCrumps from "../common/BreadCrumps";
import ChangeEmail from "./ChangeEmail";
import ChangePhone from "./ChangePhone";
import { useEffect, useState } from "react";
import request from "../../utils/request";
function Index() {
  const [profile, setProfile] = useState(null);

  return (
    <main>
      {/* section */}
      <BreadCrumps />

      <section>
        <div className="container-fluid">
          <div className="row">
            <MyAccountSidebar />
            <ChangeEmail />
            <ChangePhone />
            <div className="col-lg-9 col-md-9 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                {/* heading */}
                <h2 className="mb-6 text-center my-profile-heading">
                  My profile
                </h2>
                <div className="row">
                  <div className="pe-lg-14">
                    {/* heading */}
                    <form className=" row row-cols-1 row-cols-lg-2">
                      <div className="mb-30 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="mb-30 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="mb-30 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#changeEmail"
                          className="change-btn"
                        >
                          Change Email
                        </a>
                      </div>
                      <div className="mb-30 col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0559238088"
                        />
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#changePhone"
                          className="change-btn"
                        >
                          Change Phone
                        </a>
                      </div>
                      <div className="mb-30 col">
                        <select className="form-control">
                          <option select>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div className="mb-30 col">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="My Birthdays"
                        />
                      </div>
                    </form>
                    <div className="row justify-content-center">
                      <div className="col-md-3 text-center">
                        <button className="btn btn-dark w-100">Save</button>
                      </div>
                    </div>
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
export default Index;
