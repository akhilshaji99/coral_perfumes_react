import request from "../../../utils/request";
import getUserOrGuestToken from "../../../utils/userOrGuestToken";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
const MakeDefaultAddress = async (defaultAddress) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserOrGuestToken());
    bodyFormData.append("address_id",defaultAddress);
    
    const response = await request.post("update_default_address/", bodyFormData);

    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add Address"}
          message="Address Added."
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add Address"}
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
export default MakeDefaultAddress;
