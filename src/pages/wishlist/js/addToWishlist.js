import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";

const addToWishlist = async (product_variant_id) => {
  try {
    const guestToken = localStorage.getItem("guestToken");
    const response = await request.post("add_to_wishlist/", {
      product_variant_id,
      token: guestToken,
    });
    if (response.data.status) {
      if (guestToken === null) {
        localStorage.setItem("guestToken", response?.data?.data?.token);
      }
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add To Wishlist"}
          message="Product Added To Wishlist."
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add To Wishlist"}
          message={response?.data?.message}
        />
      ));
    }
  } catch (error) {
    toast((t) => (
      <AlerMessage
        t={t}
        toast={toast}
        status={false}
        title={"Add To Cart"}
        message={
          error?.response?.["data"]?.message ||
          "Something went wrong.Please try again."
        }
      />
    ));
    console.log("error", error);
  }
};
export default addToWishlist;
