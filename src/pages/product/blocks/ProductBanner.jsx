import deviceImageRender from "../../../utils/deviceImageRender";
import request from "../../../utils/request";
import { useEffect, useState } from "react";

function ProductBanner() {
  const [productBanner, setProductBanner] = useState(null);

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const category = queryParameters.get("category");
    getProductBanner(category);
  }, [window.location.href]);

  const getProductBanner = async (category) => {
    try {
      if (category) {
        const response = await request.get("category-banners/" + category);
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
      {productBanner ? (
        <div className="card mb-4  border-0">
          <img
            src={deviceImageRender(
              productBanner?.banner_image_url,
              productBanner?.banner_image_url
            )}
            className="img-fluid product-main-banner"
            alt={productBanner?.image_alt}
          />
        </div>
      ) : null}
    </>
  );
}
export default ProductBanner;
