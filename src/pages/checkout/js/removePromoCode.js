import request from "../../../utils/request";
import toast from "react-hot-toast";
import getUserToken from "../../../utils/userToken";
import AlerMessage from "../../common/AlerMessage";
const RemovePromoCode = async (voucher_id=null,voucher_code=null) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserToken());
    if(voucher_id){
    bodyFormData.append("voucher_id",voucher_id);
    }
    if(voucher_code){
    bodyFormData.append("voucher_code",voucher_code);

    }
    
    const response = await request.post("remove-discount-voucher/", bodyFormData);

    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Success"}
          message={response.data.message_1}
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Error"}
          message={response?.data?.message_1}
        />
      ));
    }
    return response;
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
export default RemovePromoCode;
