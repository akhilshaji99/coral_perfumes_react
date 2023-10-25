import request from "../../../utils/request";

const getTermsAndConditions = async () => {
  try {
    return await request.get("api/terms-conditions");
  } catch (error) {
    console.log("error", error);
  }
};

export default getTermsAndConditions;
