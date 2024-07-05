import GiveawayProductDetails from "./GiveawayProductDetails";

function GiveawayProductSliderDatas({ product, handleCloseBogoModal, setShowPrmoCodeFlag, cartFetchFunctionCall }) {
  return (
    <div className="product-grid slick-slider-alignment">
      <div className="product-grid carousel-product-margin">
        <GiveawayProductDetails
          product={{
            id: product?.product.id,
            name: product?.product.name,
            original_amount: product?.product.original_amount,
            price_amount: product?.product.price_amount,
            listing_image: product?.product.product_listing_image,
            slug: product?.product.slug,
            stock_status: product?.product.stock_status,
          }}
          handleCloseBogoModal={handleCloseBogoModal}
          setShowPrmoCodeFlag={setShowPrmoCodeFlag}
          cartFetchFunctionCall={cartFetchFunctionCall}
        />
      </div>
    </div>
  );
}
export default GiveawayProductSliderDatas;