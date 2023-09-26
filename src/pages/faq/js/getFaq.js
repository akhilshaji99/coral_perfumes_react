import request from "../../../utils/request";

const getFaq = async () => {
  try {
    return await request.get("faq");
  } catch (error) {
    console.log("error", error);
  }
};

export default getFaq;
