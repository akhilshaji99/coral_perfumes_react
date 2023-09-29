import { NavLink } from "react-router-dom";

function BreadCrumps() {
  return (
    <>
      <aside>
        <div className="mt-4">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-12 px-10">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#!">Perfumes</a>
                    </li>
                    {/* <li className="breadcrumb-item">
                      <a href="#!">Women</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Brands
                    </li> */}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
export default BreadCrumps;
