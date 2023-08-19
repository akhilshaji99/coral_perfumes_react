import request from "../../../utils/request";
import getUserToken from "../../../utils/userToken";
const getCheckOutDetails = async () => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserToken());
    const response = await request.post("get_checkout_details/", bodyFormData);

    if (response?.data?.status) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
export default getCheckOutDetails;
