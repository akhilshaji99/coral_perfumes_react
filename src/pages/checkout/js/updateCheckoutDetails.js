import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";

const UpdateCheckoutDetails = async (
  checkoutUpdateParams,
  giftWrappingStatus
) => {
  try {
    const response = await request.post("update_checkout_details/", {
      delivery_type: checkoutUpdateParams.delivery_type,
      payment_type: checkoutUpdateParams.payment_type,
      gift_wrap: giftWrappingStatus,
      fullname: checkoutUpdateParams.fullname,
      mobile_number: checkoutUpdateParams.mobile_number,
      country_data: checkoutUpdateParams.country_code,
      email: checkoutUpdateParams.email,
      address: checkoutUpdateParams.address,
      street_name: checkoutUpdateParams.street_name,
      address_label: checkoutUpdateParams.address_label,
      city: checkoutUpdateParams.city,
      emirate_id: checkoutUpdateParams.emirate_id,
      delivery_instruction_message: checkoutUpdateParams.instructions,
      address_id: checkoutUpdateParams.address_id,
      gift_message: checkoutUpdateParams?.gift_message,
      is_whatsapp_number: checkoutUpdateParams?.whatsap_no_flag,
      store_id: checkoutUpdateParams?.store_store_id,
      // token: getUserOrGuestToken(),
    });
    if (response.data.status) {
      return response;
    } else {
      console.log("response", response);
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={response?.data?.message_1 || "Error"}
          message={response?.data?.message || response?.data?.message_2}
        />
      ));
      return response;
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
export default UpdateCheckoutDetails;
