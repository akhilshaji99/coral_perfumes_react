import ProductBanner from "./ProductBanner";
import request from "../../../utils/request";
import { useState, useRef, useEffect } from "react";
import ThreeCol from "../../../assets/img/icons/3-item.svg";
import ThreeColActive from "../../../assets/img/icons/3-item-active.svg";
import FourCol from "../../../assets/img/icons/4-item.svg";
import FourColActive from "../../../assets/img/icons/4-item-active.svg";
import CustomDropdown from "./CustomDropdown";
import ProductDetails from "../../common/ProductDetails";
import FilterMob from "../../../assets/img/icons/filter-mob.svg";
import getUserToken from "../../../utils/userToken";

function ProductMain({ filterArray, passingDataToParent, priceRangeFilter }) {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [scrollStatus, setScrollStatus] = useState(false);
  const [productLayout, setProductLayout] = useState("col-md-4 col-6");
  const [relevanceFilter, setRelevanceFilter] = useState("");

  const targetElementRef = useRef(null);

  useEffect(() => {
    if (count !== 0 && count !== productList.length) {
      setPage((page) => page + 1);
    }
  }, [scrollStatus]);

  useEffect(() => {
    if (count !== 0 && count !== productList.length) {
      getProductList(page);
    }
  }, [page]);

  useEffect(() => {
    const targetElement = targetElementRef.current;
    // Create the Intersection Observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setScrollStatus((scrollStatus) => !scrollStatus);
      }
    }, options);

    // Attach the observer to the target element
    if (targetElement) {
      observer.observe(targetElement);
    }
    // Cleanup observer on component unmount
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  useEffect(() => {
    setProductList([]);
    setCount(0);
    setPage(1);
    getProductList(1);
  }, [window.location.href, filterArray, priceRangeFilter, relevanceFilter]);

  const getProductList = async (page_number) => {
    try {
      const queryParameters = new URLSearchParams(window.location.search);
      const category = queryParameters.get("category");
      if (category) {
        const response = await request.post("productsbycategory/" + category, {
          page: page_number,
          filterArray,
          priceRange: priceRangeFilter,
          sortRelevance: relevanceFilter,
          token: getUserToken(),
        });
        if (response.data) {
          setCount(response.data.total_count);
          passingDataToParent(
            response.data.minimum_price,
            response.data.maximum_price
          );
          setProductList((prev) => [
            ...new Set([...prev, ...response.data.data]),
          ]);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <section className="">
        <ProductBanner />
        <div className="mt-4">
          <div className="container-fluid px-0 mb-5">
            <div className="row sortHeader">
              <div className="col-md-6"></div>
              <div className="col-md-6 text-end">
                <div className="row align-items-center d-space-around">
                  <div className="col-md-1 d-none d-sm-block sort-icon">
                    {productLayout === "col-md-4 col-6" ? (
                      <img src={ThreeColActive} alt="Coral" />
                    ) : (
                      <img
                        src={ThreeCol}
                        alt="Coral"
                        onClick={() => {
                          setProductLayout("col-md-4 col-6");
                        }}
                      />
                    )}
                  </div>
                  <div className="col-md-1 d-none d-sm-block sort-icon">
                    {productLayout === "col-md-3 col-6" ? (
                      <img src={FourColActive} alt="Coral" />
                    ) : (
                      <img
                        src={FourCol}
                        alt="Coral"
                        onClick={() => {
                          setProductLayout("col-md-3 col-6");
                        }}
                      />
                    )}
                  </div>
                  <div className="col-6 d-lg-none">
                    <div className="ms-2 ">
                      <a
                        className="btn btn-filter w-100"
                        data-bs-toggle="offcanvas"
                        href="#offcanvasCategory"
                        role="button"
                        aria-controls="offcanvasCategory"
                      >
                        Filters{" "}
                        <span>
                          {" "}
                          <img src={FilterMob} alt="" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col-md-3 col-6">
                    <CustomDropdown applyRelevanceFilter={setRelevanceFilter} />
                  </div>
                  <div className="col-md-3 col-12">
                    <h6>{count} Items</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {productList.map((product, index) => {
            return (
              <div className={productLayout} key={index}>
                <div className="product-grid">
                  <ProductDetails product={product} />
                </div>
              </div>
            );
          })}
          <div ref={targetElementRef}></div>
        </div>
      </section>
    </>
  );
}
export default ProductMain;
