import request from "../../../utils/request";
import getUserOrGuestToken from "../../../utils/userOrGuestToken";

const getCartDatas = async () => {
  try {
    const response = await request.post("api/cart/items/", {
      token: getUserOrGuestToken(),
    });

    if (response?.data?.status) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
export default getCartDatas;
