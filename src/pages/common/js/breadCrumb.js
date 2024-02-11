import request from "../../../utils/request";

const breadCrumb = async () => {
  try {
    const response = await request.get(
      "/get_breadcrumbs" + window.location.pathname
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
export default breadCrumb;
