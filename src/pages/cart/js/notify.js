import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import getUserOrGuestToken from "../../../utils/userOrGuestToken";
import getUserToken from "../../../utils/userToken.js";

const addToCart = async (product_variant_id) => {
  try {
    if(getUserToken() == null){
      window.location.href = "/login";
      return;
    }
    const response = await request.post("product-stock-notify/", {
      product_variant_id,
      token: getUserOrGuestToken(),
    });
    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response?.data?.status}
          title={response?.data?.message_1}
          message={response?.data?.message_2}
        />
      ));
    } else {
      // toast((t) => (
      //   <AlerMessage
      //     t={t}
      //     toast={toast}
      //     status={response.data.status}
      //     title={"Notify"}
      //     message={
      //       response?.data?.message || "Something went wrong.Please try again."
      //     }
      //   />
      // ));
    }
  } catch (error) {
    toast((t) => (
      <AlerMessage
        t={t}
        toast={toast}
        status={false}
        title={"Notify"}
        message={
          error?.response?.["data"]?.message ||
          "Something went wrong.Please try again."
        }
      />
    ));
  }
};
export default addToCart;
