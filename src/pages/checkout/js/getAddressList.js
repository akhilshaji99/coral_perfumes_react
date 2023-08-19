import request from "../../../utils/request";
import getUserToken from "../../../utils/userToken";
const getAddressList = async () => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserToken());
    const response = await request.get("get_user_addresses/", bodyFormData);

    if (response?.data?.status) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
export default getAddressList;
