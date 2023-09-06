import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import getUserToken from "../../../utils/userToken";

const confirmCheckout = async () => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserToken());
    const response = await request.post("confirm_checkout/", bodyFormData);
    if (response?.data?.status) {
      if (response?.data?.is_cod) {
        window.location.href =
          "/cod/success?order_no=" + response?.data?.order_id;
      } else {
        window.location.href = response?.data?.data;
      }
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
