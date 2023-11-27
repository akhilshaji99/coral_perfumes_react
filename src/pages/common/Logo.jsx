import LogoCoral from "../../../src/assets/img/logo_coral.svg";

import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <img
        src={LogoCoral}
        width={100}
        style={{ cursor: "pointer" }}
        alt="Coral Perfumes"
        className="img-fluid"
        onClick={() => {
          if (window.location.pathname === "/") {
            window.scrollTo(0, 0);
          } else {
            navigate("/");
          }
        }}
      />
    </>
  );
}
export default Logo;
