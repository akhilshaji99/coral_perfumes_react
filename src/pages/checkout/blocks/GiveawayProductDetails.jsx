import deviceImageRender from "../../../utils/deviceImageRender";
import AddToBag from "../../common/AddToBag";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GiveawayProductDetails({ product, handleCloseBogoModal, setShowPrmoCodeFlag, cartFetchFunctionCall }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [giveawayProduct, setGiveawayProduct] = useState(true)
  return (
    <>
      <div className="card border-0 card-product">
        <div className="card-body product-box">
          {!product?.stock_status ? (
            <span className="badge out-of-stock-badge left-badge">
              Out Of Stock
            </span>
          ) : null}
          <div className="text-center position-relative ">
            <NavLink to={`/product/${product?.slug}`}>
              <div className="product-img-giveaway">
                <img
                  src={deviceImageRender(product.listing_image)}
                  alt="Coral Perfumes"
                  className="img-fluid"
                />
              </div>
            </NavLink>
          </div>
          {console.log(product?.stock_status)}
          <AddToBag
            variant_id={product?.id}
            stock_status={product?.stock_status}
            handleCloseBogoModal={handleCloseBogoModal}
            setShowPrmoCodeFlag={setShowPrmoCodeFlag}
            giveawayProduct={giveawayProduct}
            cartFetchFunctionCall={cartFetchFunctionCall}
            
          />
        </div>
        <div className="card-footer border-0">
        <div className="row mt-2" style={{minHeight:"50px"}}>
            <div className="col xs-12 md-6">
              <div  className="product-title-truncated ">
                <p  className="mb-0 fs-5 text-dark fw-normal product-title-truncated">{product.name}</p>
              </div>
            </div>
          </div>
          <div className="row custom-row1 mb-5 ">
            <div className="col-md-4 col-6 px-0">
              <h5 className="selling-price">
                AED 0
              </h5>
            </div>
            <div className="col-md-4 col-6 px-0">
              {product?.original_amount ? (
                <h5 className="discounted-price">
                  AED {product.original_amount}
                </h5>
              ) : null}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default GiveawayProductDetails;