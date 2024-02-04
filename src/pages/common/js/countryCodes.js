import request from "../../../utils/request";

const getCountryCodes = async () => {
  try {
    const response = await request.get("phone_country_code");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
export default getCountryCodes;
