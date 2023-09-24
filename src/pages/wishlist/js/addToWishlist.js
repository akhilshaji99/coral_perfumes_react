import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import getUserToken from "../../../utils/userToken.js";

const addToWishlist = async (variant_slug) => {
  try {
    if(getUserToken() == null){
      window.location.href = "/login";
      return;
    }
    const response = await request.post("add-to-wishlist", {
      variant_slug,
      token: getUserToken(),
    });
    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add To Wishlist"}
          message={response?.data?.message}
        />
      ));
      return { status: true, variant_slug: variant_slug };
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
      return { status: false, variant_slug: null };
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
    return { status: false, variant_slug: null };
  }
};
export default addToWishlist;
