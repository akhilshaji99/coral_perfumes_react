import request from "../../../utils/request";

const getCountries = async () => {
  try {

    const response = await request.get("get_countries/");

    if (response?.data?.status) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
  }
};
export default getCountries;