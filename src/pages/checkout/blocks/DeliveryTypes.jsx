import request from "../../../utils/request";
import { useEffect, useState } from "react";
function DeliveryTypes({ fetchCheckoutDetailsByDeliveryType, checkedValue }) {
  const [deliveryTypes, setDeliveryTypes] = useState([]);
  const [checkedDeliveryType, setCheckedDeliveryType] = useState(null);

  useEffect(() => {
    getDeliveryTypes();
  }, []);

  useEffect(() => {
    if (checkedValue) {
      setCheckedDeliveryType(checkedValue);
    }
  }, [checkedValue]);

  const getDeliveryTypes = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("emirate_id", 7);
      const response = await request.post("get_delivery_types/", bodyFormData);
      if (response.data) {
        setDeliveryTypes(response?.data?.data);
        if (response?.data?.data.length > 0) {
          setCheckedDeliveryType(response?.data?.data[0]?.id);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="accordion-item card card-bordered shadow mb-2 ">
      <div className="d-flex justify-content-between align-items-center h">
        <h4 className="pt-3 ps-3 "> DELIVERY TYPE</h4>
        <a
          href="#"
          className="fs-5 text-inherit collapsed h4"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseFour"
          aria-expanded="true"
          aria-controls="flush-collapseFour"
        >
          <button type="button" class="btn btn-default">
            <span class="glyphicon glyphicon-menu-down">^</span>
          </button>
        </a>
      </div>
      <div
        id="flush-collapseFour"
        className="accordion-collapse collapse show "
        data-bs-parent="#accordionFlushExample"
      >
        <div className="mb-1">
          {/* card body */}
          <div className="card-body p-1">
            {deliveryTypes?.map((deliveryType, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-md-4 col-12">
                    {/* input */}
                    <div className="mb-3 mb-lg-0">
                      <div className="card-body p-3">
                        {/* check input */}
                        <div className="d-flex">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value={deliveryType?.id}
                              name="del_type"
                              checked={checkedDeliveryType === deliveryType?.id}
                              onChange={(event) => {
                                setCheckedDeliveryType(
                                  parseInt(event.target.value)
                                );
                                fetchCheckoutDetailsByDeliveryType(
                                  parseInt(event.target.value)
                                );
                              }}
                            />
                          </div>
                          <div>
                            {/* title */}
                            <h5 className=" pt-1 ps-5 h6">
                              {deliveryType?.type}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    {/* input */}
                    <div className="card-body pt-3">
                      <h5 className=" pt-1  h6"> AED {deliveryType?.amount}</h5>
                    </div>
                  </div>
                  <h5 className=" ps-12  h6">{deliveryType?.message}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeliveryTypes;
