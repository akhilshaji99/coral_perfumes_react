import request from "../../../utils/request";

const getCartDatas = async () => {
  const guestToken = localStorage.getItem("guestToken");
  try {
    const response = await request.post("api/cart/items/", {
      token: guestToken,
    });

    if (response?.data?.status) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
export default getCartDatas;
