import { NavLink } from "react-router-dom";

function BreadCrumps({ breadCrumbDatas=[] }) {
  return (
    <>
      <aside>
        <div className="mt-4  crumb-mob">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-12 px-10">
                <nav aria-label="breadcrumb">
                  {breadCrumbDatas.length > 0 ? (
                    <ol className="breadcrumb">
                      {breadCrumbDatas?.map((breadCrumbData, index) => {
                        return (
                          <li className="breadcrumb-item" key={index}>
                            <NavLink
                              to={
                                index === 0
                                  ? "/"
                                  : breadCrumbDatas.length === index + 1
                                  ? "javascript:;"
                                  : breadCrumbData?.url
                              }
                            >
                              {breadCrumbData?.title}
                            </NavLink>
                          </li>
                        );
                      })}
                      {/* <li className="breadcrumb-item">
                      <a href="#!">Women</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Brands
                    </li> */}
                    </ol>
                  ) : null}
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
