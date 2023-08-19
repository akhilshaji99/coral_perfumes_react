import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import getUserToken from "../../../utils/userToken";

const confirmCheckout = async () => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserToken());
    const response = await request.post("confirm_checkout/", bodyFormData);
    if (response.data.status) {
      //   toast((t) => (
      //     <AlerMessage
      //       t={t}
      //       toast={toast}
      //       status={response.data.status}
      //       title={"Add Address"}
      //       message="Address Added."
      //     />
      //   ));
      //   return response;
    } else {
      //   toast((t) => (
      //     <AlerMessage
      //       t={t}
      //       toast={toast}
      //       status={response.data.status}
      //       title={"Add Address"}
      //       message={response?.data?.message}
      //     />
      //   ));
      //   return response;
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
    console.log("error", error);
  }
};
export default confirmCheckout;
