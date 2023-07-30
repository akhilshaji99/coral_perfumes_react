import ProductBanner from "./ProductBanner";
import request from "../../../utils/request";
import { useState, useRef, useEffect } from "react";
import ThreeCol from "../../../assets/img/icons/3-item.svg";
import ThreeColActive from "../../../assets/img/icons/3-item-active.svg";
import FourCol from "../../../assets/img/icons/4-item.svg";
import FourColActive from "../../../assets/img/icons/4-item-active.svg";
import CustomDropdown from "./CustomDropdown";
import { NavLink } from "react-router-dom";
import ProductDetails from "../../common/ProductDetails";

function ProductMain({ filterArray, passingDataToParent, priceRangeFilter }) {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [scrollStatus, setScrollStatus] = useState(false);
  const [productLayout, setProductLayout] = useState("col-md-4");
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
          sort: relevanceFilter,
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
      <section className="col-lg-9 col-md-12">
        <ProductBanner />
        <div className="mt-4">
          <div className="container-fluid px-0 mb-5">
            <div className="row sortHeader">
              <div className="col-md-6"></div>
              <div className="col-md-6 text-end">
                <div className="row align-items-center d-space-around">
                  <div className="col-md-1 sort-icon">
                    {productLayout === "col-md-4" ? (
                      <img src={ThreeColActive} alt="Coral" />
                    ) : (
                      <img
                        src={ThreeCol}
                        alt="Coral"
                        onClick={() => {
                          setProductLayout("col-md-4");
                        }}
                      />
                    )}
                  </div>
                  <div className="col-md-1 sort-icon">
                    {productLayout === "col-md-3" ? (
                      <img src={FourColActive} alt="Coral" />
                    ) : (
                      <img
                        src={FourCol}
                        alt="Coral"
                        onClick={() => {
                          setProductLayout("col-md-3");
                        }}
                      />
                    )}
                  </div>
                  <div className="col-md-3">
                    <CustomDropdown applyRelevanceFilter={setRelevanceFilter} />
                  </div>
                  <div className="col-md-3">
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
                <NavLink to={`/product-details/?slug=${product?.slug}`}>
                  <div className="product-grid">
                    <ProductDetails product={product} />
                  </div>
                </NavLink>
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
