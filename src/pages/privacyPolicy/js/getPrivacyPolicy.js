import request from "../../../utils/request";

const getPrivacyPolicy = async () => {
  try {
    return await request.get("api/privacy-policy");
  } catch (error) {
    console.log("error", error);
  }
};

export default getPrivacyPolicy;
