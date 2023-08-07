import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";

const cartDecrement = async (cart_item_id) => {
  try {
    const response = await request.post(`cart/item/${cart_item_id}/subtract/`, {
      quantity: 1,
    });

    if (response?.data?.status) {
      return true;
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response?.data?.status}
          title={"Error"}
          message={
            response?.data?.message || "Something went wrong.Please try again."
          }
        />
      ));
      return false;
    }
  } catch (error) {
    toast((t) => (
      <AlerMessage
        t={t}
        toast={toast}
        status={false}
        title={"Error"}
        message={
          error?.response?.["data"]?.message ||
          "Something went wrong.Please try again."
        }
      />
    ));
    return false;
  }
};
export default cartDecrement;
