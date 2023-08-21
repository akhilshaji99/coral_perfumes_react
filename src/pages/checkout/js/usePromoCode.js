import request from "../../../utils/request";
import toast from "react-hot-toast";
import getUserToken from "../../../utils/userToken";
import AlerMessage from "../../common/AlerMessage";
const UsePromoCode = async (voucher_id) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserToken());
    bodyFormData.append("voucher_id",voucher_id);
    
    const response = await request.post("use-discount-voucher/", bodyFormData);

    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Success"}
          message={response.data.message}
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Error"}
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
        title={"Add Address"}
        message={
          error?.response?.["data"]?.message ||
          "Something went wrong.Please try again."
        }
      />
    ));
    console.log("error", error);
  }
};
export default UsePromoCode;
