import request from "../../../utils/request";
import getUserToken from "../../../utils/userToken";
const getPromoCodes = async () => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserToken());
    const response = await request.get("discount-vouchers/", bodyFormData);

   return response;
  } catch (error) {
    console.log("error", error);
  }
};
export default getPromoCodes;
