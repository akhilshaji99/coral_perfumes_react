import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductDetails from "../../common/ProductDetails";

function ProductCarousel({ componentDatas }) {
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };
  return (
    <>
      <div className="container-lg-fluid cc-margin">
        <div
          className="card flash-sale-container "
          style={dynamicBackground}
        >
          <div className="row d-end">
            <div className="col-md-8 ">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="mb-5 flash-sale"> {componentDatas?.title} </h1>
                </div>
              </div>
            </div>
          </div>

          <Carousel
            additionalTransfrom={0}
            autoPlay={false}
            arrows
            autoPlaySpeed={3500}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={0}
            pauseOnHover={false}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              largescreen: {
                breakpoint: {
                  max: 3000,
                  min: 1480,
                },
                items: 5,
                partialVisibilityGutter: 40,
              },
              desktop: {
                breakpoint: {
                  max: 1680,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },

                items: 2.5,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {componentDatas?.datas?.[0]?.products?.map((product, index) => {
              return (
                <div className="product-grid" key={index}>
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
                        currency_code:product?.currency_code
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default ProductCarousel;
