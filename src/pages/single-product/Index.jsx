import ProductCarousel from "./blocks/ProductCarousel";
import { useEffect } from "react";
import request from "../../utils/request";

function Index() {
  useEffect(() => {
    getProductDetails();
  }, [window.location.href]);

  const getProductDetails = async () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const product_slug = queryParameters.get("slug");
    try {
      if (product_slug) {
        const response = await request.get(
          "get_product_variants/" + product_slug+'/'
        );
        if (response.data) {
          //   setProductFilters(response.data.data);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="conatiner px-5">
        <div className="row mb-5 ">
          <ProductCarousel />
          <div className="col-md-4 ">
            <div className="product-desc-section">
              <h1>Bvlgari Jasmin Noir Splendida Eau De Parfum 100 Ml</h1>
              <h2>nspired by Christian Dior Lavender</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
