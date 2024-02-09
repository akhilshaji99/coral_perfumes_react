import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
import getUserToken from "../../../utils/userToken";

const addNewAddress = async (formValues) => {
  try {
    const response = await request.post("add_user_address/", {
      // flat_name: formValues.flat_name,
      // street_address: formValues.street_address,
      // building_number: formValues.building_number,
      // postal_code: formValues.postal_code,
      token: getUserToken(),
      fullname: formValues.fullname,
      phone_number: formValues.phone_number,
      email: formValues.email,
      country_data: formValues.country_datas,
      address: formValues.address,
      street_name: formValues.street_name,
      emirate: formValues.emirate,
      city: formValues.city,
      address_label: formValues.address_label,
    });
    if (response.data.status) {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add Address"}
          message="Address Added."
        />
      ));
    } else {
      toast((t) => (
        <AlerMessage
          t={t}
          toast={toast}
          status={response.data.status}
          title={"Add Address"}
          message={response?.data?.message}
        />
      ));
    }
    return response;
  } catch (error) {
    toast((t) => (
      <AlerMessage
        t={t}
        toast={toast}
        status={false}
        title={"Add Address"}
        message={
          error?.response?.["data"]?.message ||
          "Something went wrong.Please try again."
        }
      />
    ));
    console.log("error", error);
  }
};
export default addNewAddress;
