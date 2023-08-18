import request from "../../../utils/request";

const getStores = async () => {
  try {
    return await request.get("get_store_details/");
  } catch (error) {
    console.log("error", error);
  }
};

export default getStores;
