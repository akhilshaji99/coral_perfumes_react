import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import getUserOrGuestToken from "../../../utils/userOrGuestToken";

const addToCart = async (product_variant_id) => {
  try {
    const response = await request.post("product-stock-notify/", {
      product_variant_id,
      token: getUserOrGuestToken(),
    });
    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Notify"}
          message="Notified"
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Notify"}
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
