import BreadCrumps from "../common/BreadCrumps";
import ProductDetails from "../common/ProductDetails";
import MyAccountSidebar from "../common/MyAccountSidebar";
import WishlistEmpty from "../alert_pages/WishlistEmpty";
import { useEffect, useState } from "react";
import request from "../../utils/request";

function Index() {
  const [wishList, setWishList] = useState([]);
  const [wishListMessages, setWishListMessages] = useState(null);
  const [reFetchApi, setReFetchApi] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getWishlistDatas();
  }, []);

  useEffect(() => {
    console.log(reFetchApi);
    if (reFetchApi) {
      getWishlistDatas();
    }
  }, [reFetchApi]);

  const getWishlistDatas = async () => {
    try {
      const response = await request.post("get_user_wishlists/");
      setReFetchApi(false);
      if (response?.data) {
        setWishList(response?.data?.data);
        setWishListMessages(response?.data?.message);
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  const isDataListEmpty = wishList.length === 0;

  return (
    <>
      {isDataListEmpty ? (
        !loading ? (
          <section className="mb-lg-14 mb-8 mt-8 my-bag empty-top">
            <div className="container-fluid" style={{ marginTop: "9%" }}>
              <div className="row mt-8">
                <WishlistEmpty wishListMessages={wishListMessages} />
              </div>
            </div>
          </section>
        ) : (
          <div style={{ minHeight: "500px" }}></div>
        )
      ) : (
        <main>
          <BreadCrumps />

          <section>
            <div className="container-fluid">
              <div className="row">
                <MyAccountSidebar />
                <div className="col-lg-9 col-md-9 col-12">
                  <div className="py-6 p-md-6 p-lg-10">
                    {/* heading */}
                    <h2 className="mb-6 text-center my-profile-heading">
                      My Wishlist
                    </h2>
                    <div className="row">
                      {wishList?.map((product, index) => {
                        return (
                          <div className="col-md-4 col-6" key={index}>
                            <div className="product-grid">
                              <ProductDetails
                                product={{
                                  id: product?.product_variant?.id,
                                  discount_percentage:
                                    product?.product_variant
                                      ?.discount_percentage,
                                  name: product?.product_variant?.name,
                                  original_amount:
                                    product?.product_variant?.original_amount,
                                  price_amount:
                                    product?.product_variant?.price_amount,
                                  listing_image:
                                    product?.product_variant
                                      ?.product_listing_image,
                                  slug: product?.product_variant?.slug,
                                  product_tag:
                                    product?.product_variant?.product_tag,
                                  is_in_wishlist: true,
                                  currency_code:
                                    product?.product_variant?.currency_code,
                                }}
                                setReFetchApi={setReFetchApi}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
export default Index;
