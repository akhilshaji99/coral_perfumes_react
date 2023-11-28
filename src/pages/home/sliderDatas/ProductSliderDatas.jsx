import ProductDetails from "../../common/ProductDetails";

function ProductSliderDatas({ product, index }) {
  return (
    <div className="product-grid slick-slider-alignment" key={index}>
      <div className="product-grid carousel-product-margin">
        <ProductDetails
          product={{
            id: product?.id,
            discount_percentage: product?.discount_percentage,
            name: product?.name,
            original_amount: product?.original_amount,
            price_amount: product?.price_amount,
            listing_image: product?.product_listing_image,
            slug: product?.slug,
            product_tag: product?.product_tag,
            is_in_wishlist: product?.is_in_wishlist,
            currency_code: product?.currency_code,
            stock_status: product?.stock_status,
          }}
        />
      </div>
    </div>
  );
}
export default ProductSliderDatas;
