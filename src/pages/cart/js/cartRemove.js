import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import { changeCartCount } from "../../../redux/cart/cartCount";

const cartRemove = async (product_variant_id, dispatch) => {
  try {
    const response = await request.delete(
      "api/cart/delete/" + product_variant_id + "/"
    );
    if (response.data.status) {
      console.log(response?.data?.items_count);
      dispatch(changeCartCount(response?.data?.items_count));
      // toast((t) => (
      //   <AlerMessage
      //     t={t}
      //     toast={toast}
      //     status={response?.data?.status}
      //     title={"Success"}
      //     message={response?.data?.message}
      //   />
      // ));
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
export default cartRemove;
