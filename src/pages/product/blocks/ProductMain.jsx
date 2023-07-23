import ProductBanner from "./ProductBanner";
import request from "../../../utils/request";
import { useState, useRef, useEffect, useCallback } from "react";
import deviceImageRender from "../../../utils/deviceImageRender";

function ProductMain() {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);
  const [count, setCount] = useState(0);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        console.log("totalCount", count);
        console.log("productList.length", productList);
        if (count != 0 || count > productList.length) {
          console.log(page);
          setPage((page) => page + 1);
          getProductList();
        }
      }
    },
    [count]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver, window.location.href]);

  useEffect(() => {
    setProductList([]);
    setCount(0);
    setPage(1);
    getProductList();
  }, [window.location.href]);

  const getProductList = async () => {
    try {
      const queryParameters = new URLSearchParams(window.location.search);
      const category = queryParameters.get("category");
      if (category) {
        const response = await request.post("productsbycategory/" + category, {
          page,
        });
        if (response.data) {
          setCount(response.data.total_count);
          await setProductList((prev) => [
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

        <div className="row">
          {productList.map((product, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div className="product-grid">
                  <div className="card card-product product-box">
                    <div className="card-body">
                      <span className="badge custom-badge">
                        <svg
                          width="29"
                          height="25"
                          viewBox="0 0 29 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.35118 15.597L11.6544 12.9424V22.8972C11.6544 25.22 13.2179 25.6901 15.1251 23.948L28.1316 12.0576C29.7295 10.6058 29.0595 9.40295 26.6368 9.40295L17.3336 12.0576V2.10278C17.3336 -0.220009 15.7701 -0.690096 13.8629 1.05199L0.856373 12.9424C-0.724342 14.408 -0.0542555 15.597 2.35118 15.597Z"
                            fill="white"
                          />
                        </svg>{" "}
                        {product.discount_percentage}%
                      </span>
                      <span className="wishlist-button">
                        <svg
                          width="29"
                          height="25"
                          viewBox="0 0 29 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.5399 7.98659C27.5399 17.032 18.9036 22.3664 15.0342 23.642C14.5754 23.7967 13.8375 23.7967 13.3787 23.642C11.7233 23.1009 9.19022 21.8059 6.85662 19.8151C3.70527 17.1286 0.873047 13.1664 0.873047 7.98659C0.873047 3.98576 4.18396 0.75803 8.27274 0.75803C10.7061 0.75803 12.8601 1.89836 14.2164 3.63786C15.2167 2.3415 16.6397 1.41078 18.2545 0.996773C19.8693 0.582766 21.5811 0.709778 23.112 1.35719C25.7248 2.4782 27.5399 5.01012 27.5399 7.98659Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <div className="text-center position-relative ">
                        <a href="#!">
                          {" "}
                          <img
                            src={deviceImageRender(product.listing_image)}
                            alt="Coral Perfumes"
                            className="mb-3 img-fluid product-img"
                          />
                        </a>
                      </div>
                      <button className="btn btn-dark w-100 mt-2">
                        add to bag
                      </button>
                    </div>
                  </div>
                  <h4>{product.name}</h4>
                  <div className="row custom-row1">
                    <div className="col-md-4 px-0">
                      <h5 className="selling-price">
                        AED {product.price_amount}
                      </h5>
                    </div>
                    <div className="col-md-4 px-0">
                      <h5 className="discounted-price">
                        AED {product.original_amount}
                      </h5>
                    </div>
                    <div className="col-md-4 px-0">
                      <h5 className="discount-percentage">
                        {product.discount_percentage}% off
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div ref={loader} />
      </section>
    </>
  );
}
export default ProductMain;
