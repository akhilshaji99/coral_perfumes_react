import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";


const deleteUserAddress = async (id) => {
  try {

    const response = await request.get("delete_user_address/"+id, {
     
      address_id: id,
     

    });
    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Delete Address"}
          message={response?.data?.message}
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Delete Address"}
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
