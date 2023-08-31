import request from "../../../utils/request";
import getUserOrGuestToken from "../../../utils/userOrGuestToken";

const getCartDatas = async () => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("token", getUserOrGuestToken());
    const response = await request.post("api/cart/items/", bodyFormData);

    // if (response?.data?.status) {
    //   return response.data;
    // }
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
export default getCartDatas;
