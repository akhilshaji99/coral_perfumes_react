import request from "../../../utils/request";

const getReturnPolicy = async () => {
  try {
    return await request.get("api/return-policy");
  } catch (error) {
    console.log("error", error);
  }
};

export default getReturnPolicy;
