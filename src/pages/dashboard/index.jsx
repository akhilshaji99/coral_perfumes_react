import BreadCrumps from "../common/BreadCrumps";
import personalInfo from "../../assets/img/icons/my-account/personal-info-2x.svg";
import addressBook from "../../assets/img/icons/my-account/address-book-2x.svg";
import myOrders from "../../assets/img/icons/my-account/my-orders-2x.svg";
import myWishlist from "../../assets/img/icons/my-account/my-wishlist-2x.svg";
import Returns from "../../assets/img/icons/my-account/returns-2x.svg";
import Logout from "../../assets/img/icons/my-account/logout-2x.svg";
import { NavLink } from "react-router-dom";

function index() {
  const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <main>
      <section>
        <div className="container-fluid">
          <BreadCrumps />
        </div>
        <div className="container ">
          <h2 className="dashboard-heading">my dashboard</h2>
          <div className="row d-flex justify-content-center dashboard-row">
            <div className="col-md-3 col-6 text-center mt-3">
              <NavLink to={"/personal-info"}>
                <img
                  src={personalInfo}
                  alt="Coral Perfumes"
                  className="img-fluid"
                />
                <h6>my personal info</h6>
                <p>edit details</p>
              </NavLink>
            </div>
            <div className="col-md-3 col-6 text-center mt-4">
              <NavLink to={"/address-book"}>
                <img
                  src={addressBook}
                  alt="Coral Perfumes"
                  className="img-fluid"
                />
                <h6>address book</h6>
                <p>edit details</p>
              </NavLink>
            </div>{" "}
            <div className="col-md-3 col-6 text-center">
              <NavLink to={"/orders"}>
                <img
                  src={myOrders}
                  alt="Coral Perfumes"
                  className="img-fluid"
                />
                <h6>my orders</h6>
                <p>edit details</p>
              </NavLink>
            </div>
            <div className="col-md-3 col-6 text-center mt-2">
              <NavLink to={"/wishlist"}>
                <img
                  src={myWishlist}
                  alt="Coral Perfumes"
                  className="img-fluid"
                />
                <h6>my wishlist</h6>
                <p>edit details</p>
              </NavLink>
            </div>{" "}
            <div className="col-md-3 col-6 text-center">
              <NavLink to={"/returns"}>
                <img src={Returns} alt="Coral Perfumes" className="img-fluid" />
                <h6>returns</h6>
                <p>edit details</p>
              </NavLink>
            </div>{" "}
            <div
              className="col-md-3 col-6 text-center"
              onClick={() => logoutUser()}
              style={{ cursor: "pointer" }}
            >
              <img src={Logout} alt="Coral Perfumes" className="img-fluid" />
              <h6>logout</h6>
              {/* <p>edit details</p> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default index;
