import { NavLink } from "react-router-dom";
import WishlistIcon from "../../wishlist/blocks/WishlistIcon";
import deviceImageRender from "../../../utils/deviceImageRender";
import AddToBag from "../../common/AddToBag";
import { useState } from "react";

function FlashSaleSliderDatas({ product, index }) {
  const [status, setStatus] = useState(false);

  return (
    <div className="product-grid slick-slider-alignment" key={index}>
      <div className="card card-product  carousel-product-margin">
        <div className="card-body product-box">
          {product.discount_percentage && product?.stock_status ? (
            <span
              className="badge custom-badge"
              style={{ backgroundColor: product?.offer_tag_color }}
            >
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
          ) : null}
          {!product?.stock_status ? (
            <span
              className="badge out-of-stock-badge"
            >
              Out Of Stock
            </span>
          ) : null}
          <WishlistIcon
            product_slug={product?.slug}
            is_in_wishlist={product?.is_in_wishlist}
            changeWishlistStatus={() => {
              product.is_in_wishlist = !product?.is_in_wishlist;
              setStatus(!status);
            }}
          />
          <div className="text-center position-relative ">
            <a href="#!">
              {" "}
              <div className="product-img">
                <NavLink to={`/product-details/?slug=${product?.slug}`}>
                  <img
                    src={deviceImageRender(product?.product_listing_image)}
                    alt="Coral Perfumes"
                    className=" img-fluid "
                  />
                </NavLink>
              </div>
            </a>
          </div>
          <AddToBag
            variant_id={product?.id}
            stock_status={product?.stock_status}
          />
        </div>
        <div className="card-footer border-0">
          <h4 className="ellipsis-text">{product.name}</h4>
          <div className="row custom-row1 mb-5">
            <div className="col-md-4 col-6 px-0">
              <h5 className="selling-price">
                {product?.currency_code} {product.price_amount}
              </h5>
            </div>
            {product.original_amount ? (
              <div className="col-md-4 col-6 px-0">
                <h5 className="discounted-price">
                  {product?.currency_code} {product.original_amount}
                </h5>
              </div>
            ) : null}
            {product.discount_percentage ? (
              <div className="col-md-4 px-0">
                <h5 className="discount-percentage">
                  {product.discount_percentage}% off
                </h5>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlashSaleSliderDatas;
