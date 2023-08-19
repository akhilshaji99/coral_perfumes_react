import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";


const deleteUserAddress = async (id) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("address_id", id);
    const response = await request.post("delete_user_address/",bodyFormData);
    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={response?.data?.message_2}
          message={response?.data?.message_2}
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={response?.data?.message_2}
          message={response?.data?.message_2}
        />
      ));
    }
  } catch (error) {
    toast((t) => (
      <AlerMessage
        t={t}
        toast={toast}
        status={false}
        title={"Delete Address"}
        message={
          error?.response?.["data"]?.message ||
          "Something went wrong.Please try again."
        }
      />
    ));
  
  }
};
export default deleteUserAddress;
