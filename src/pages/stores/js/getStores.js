import request from "../../../utils/request";

const getStores = async (id) => {
  try {
    return await request.get("api/store/"+id+"/");
  } catch (error) {
    console.log("error", error);
  }
};

export default getStores;
