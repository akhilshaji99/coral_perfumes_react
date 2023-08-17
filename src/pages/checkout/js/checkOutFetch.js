import request from "../../../utils/request";
import getUserOrGuestToken from "../../../utils/userOrGuestToken";

const getCheckOutDetails = async (checkoutFetchParams) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserOrGuestToken());
    // console.log(checkoutFetchParams);
    // bodyFormData.set("data", checkoutFetchParams);
    for ( var key in checkoutFetchParams ) {
      bodyFormData.append(key, checkoutFetchParams[key]);
  }
    // bodyFormData.append(checkoutFetchParams);
    const response = await request.post("get_checkout_details/", bodyFormData);

    if (response?.data?.status) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
export default getCheckOutDetails;
