import request from "../../../utils/request";
import { useEffect, useState } from "react";
function DeliveryTypes({ fetchCheckoutDetailsByDeliveryType, checkedValue }) {
  const [deliveryTypes, setDeliveryTypes] = useState([]);
  const [checkedShippingType, setCheckedShippingType] = useState(null);

  useEffect(() => {
    getDeliveryTypes();
  }, []);

  useEffect(() => {
    if (checkedValue) {
      setCheckedShippingType(checkedValue);
    }
  }, [checkedValue]);

  const getDeliveryTypes = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("emirate_id", 7);
      const response = await request.post("get_delivery_types/", bodyFormData);
      if (response.data) {
        setDeliveryTypes(response?.data?.data);
        if (checkedValue) {
          setCheckedShippingType(checkedValue);
        } else if (response?.data?.data.length > 0) {
          setCheckedShippingType(response?.data?.data[0]?.id);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="accordion-item checkout-accordion delivery-type">
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
          <button type="button" className="btn btn-default">
            <span className="accordion-arrow">
              <svg
                width={18}
                height={9}
                viewBox="0 0 18 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.07992 8.04999L7.59992 1.52999C8.36992 0.759988 9.62992 0.759988 10.3999 1.52999L16.9199 8.04999"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
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
                              checked={
                                parseInt(checkedShippingType) ===
                                parseInt(deliveryType?.id)
                              }
                              onChange={(event) => {
                                setCheckedShippingType(
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
                  <h6 className=" ps-12  h6">{deliveryType?.message}</h6>
                </div>
              );
            })}
          </div>
          {/* <div className="row mt-3">
            <div className="col-md-3">
              <button className="btn btn-dark w-100">CONFIRM</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default DeliveryTypes;
