import deviceImageRender from "../../../utils/deviceImageRender";
import request from "../../../utils/request";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductBanner() {
  const urlParams = useParams([]);

  const [productBanner, setProductBanner] = useState(null);

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const category = queryParameters.get("category");
    getProductBanner(category);
  }, [window.location.href]);

  const getProductBanner = async (category) => {
    try {
      if (urlParams?.link_type && urlParams?.link_value) {
        const response = await request.get(
          "category-banners/" + urlParams?.link_value
        );
        if (response.data) {
          setProductBanner(response.data.data);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {productBanner ? (
            <img
              src={deviceImageRender(
                productBanner?.banner_image_url,
                productBanner?.banner_image_url
              )}
              className="product-main-banner"
              alt={productBanner?.image_alt}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
export default ProductBanner;
