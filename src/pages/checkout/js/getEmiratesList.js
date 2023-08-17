import request from "../../../utils/request";
import getUserOrGuestToken from "../../../utils/userOrGuestToken";

const getEmirates = async () => {
  try {

    const response = await request.get("get_emirates/");

    if (response?.data?.status) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
export default getEmirates;
