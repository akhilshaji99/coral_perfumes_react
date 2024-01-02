import CloseButton from "../../assets/icons/close.svg";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../pages/common/Logo";
import HamburgerMenu from "../../assets/img/icons/hamburger.svg";

function MobileHeader({
  changeMyAccountMenuStatus,
  myAccountStatus,
  mobileMenuStatus,
  closeMoibileMenu,
}) {
  //Cart Count :: Redux
  const cartTotalCount = useSelector((state) => state.cartCount.cartTotalCount);
  //#End
  return (
    <div className="row align-items-center d-md-none mt-2">
      <div
        className="col-md-4 col-4"
        onClick={() => {
          if (mobileMenuStatus) {
            closeMoibileMenu();
          } else {
            changeMyAccountMenuStatus();
          }
        }}
      >
        <button className="navbar-toggler collapsed" type="button">
          {mobileMenuStatus || myAccountStatus ? (
            <img
              src={CloseButton}
              alt="Coral Menu Close"
              className="mob-menu-close"
            />
          ) : (
            <img src={HamburgerMenu} alt="Coral Perfumes" />
          )}
        </button>
      </div>
      <div className="col-md-4 col-4">
        <NavLink
          className="navbar-brand"
          to="/"
          onClick={() => {
            changeMyAccountMenuStatus(false);
          }}
        >
          {/* <img src={Logo} alt="Coral Perfumes" width={55} height={33} /> */}
          <Logo />
        </NavLink>
      </div>
      <div
        className="col-md-4 col-4 text-end"
        onClick={() => changeMyAccountMenuStatus(false)}
      >
        {/* <a
                className="text-muted position-relative "
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasRight"
              > */}
        <Link to={"/cart"} className="text-muted position-relative ">
          <svg
            width={14}
            height={17}
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7178 6.7999L12.7179 6.80058L13.457 13.226C13.457 13.2261 13.457 13.2263 13.457 13.2264C13.5711 14.2368 13.4622 15.0441 13.0811 15.5887C12.7207 16.1039 12.0316 16.5 10.6932 16.5H3.30954C1.96633 16.5 1.27558 16.1035 0.915452 15.5887C0.534826 15.0447 0.427442 14.2381 0.545533 13.2279L0.545639 13.227L1.28482 6.80058L1.28483 6.80058L1.28517 6.79748C1.37768 5.94646 1.48803 5.33908 1.82437 4.92127C2.13058 4.54089 2.7168 4.21875 4.04052 4.21875H9.954C11.2775 4.21875 11.8642 4.54079 12.1715 4.92171C12.5093 5.34028 12.621 5.94815 12.7178 6.7999Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <mask id="path-2-inside-1_1991_17572" fill="white">
              <path d="M3.62964 5.3125V2.21354C3.62964 0.885417 4.47223 0 5.73612 0H8.2639C9.52779 0 10.3704 0.885417 10.3704 2.21354V5.3125" />
            </mask>
            <path
              d="M2.62964 5.3125C2.62964 5.86478 3.07735 6.3125 3.62964 6.3125C4.18192 6.3125 4.62964 5.86478 4.62964 5.3125H2.62964ZM9.37038 5.3125C9.37038 5.86478 9.81809 6.3125 10.3704 6.3125C10.9227 6.3125 11.3704 5.86478 11.3704 5.3125H9.37038ZM4.62964 5.3125V2.21354H2.62964V5.3125H4.62964ZM4.62964 2.21354C4.62964 1.76229 4.76968 1.47006 4.93333 1.2981C5.09272 1.1306 5.34678 1 5.73612 1V-1C4.86157 -1 4.06239 -0.687895 3.48451 -0.0806474C2.91089 0.522129 2.62964 1.33667 2.62964 2.21354H4.62964ZM5.73612 1H8.2639V-1H5.73612V1ZM8.2639 1C8.65323 1 8.9073 1.1306 9.06669 1.2981C9.23033 1.47006 9.37038 1.76229 9.37038 2.21354H11.3704C11.3704 1.33667 11.0891 0.522129 10.5155 -0.0806473C9.93763 -0.687895 9.13845 -1 8.2639 -1V1ZM9.37038 2.21354V5.3125H11.3704V2.21354H9.37038Z"
              fill="black"
              mask="url(#path-2-inside-1_1991_17572)"
            />
          </svg>
          {cartTotalCount > 0 ? (
            <span class="mob-cart-count">{cartTotalCount}</span>
          ) : null}
        </Link>
      </div>
    </div>
  );
}
export default MobileHeader;
