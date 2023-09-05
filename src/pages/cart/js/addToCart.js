import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import getUserOrGuestToken from "../../../utils/userOrGuestToken";
import $ from "jquery";
// import { useSelector, useDispatch } from "react-redux";
import { changeCartDrawerFlag } from "../../../redux/cart/cartSlice";

const addToCart = async (product_variant_id, quantity, dispatch) => {
  try {
    const response = await request.post("add_to_cart/", {
      product_variant_id,
      quantity,
      token: getUserOrGuestToken(),
    });
    if (response.data.status) {
      $("#cartDrawer").toggleClass("show");
      dispatch(changeCartDrawerFlag(true));
      const guestToken = localStorage.getItem("guestToken");
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
          message={
            response?.data?.message || "Something went wrong.Please try again."
          }
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
