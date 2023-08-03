import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";

const addToCart = async (product_variant_id, quantity) => {
  try {
    const guestToken = localStorage.getItem("guestToken");
    const response = await request.post("add_to_cart/", {
      product_variant_id,
      quantity,
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
          title={"Add To Cart"}
          message="Product Added To cart."
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add To Cart"}
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
export default addToCart;
