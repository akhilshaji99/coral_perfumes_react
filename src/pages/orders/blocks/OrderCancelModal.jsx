import $ from "jquery";
import React, { useEffect, useState } from "react";
import request from "../../../utils/request";
import toast from "react-hot-toast";
import AlerMessage from "../../common/AlerMessage";
function OrderCancelModal({
  setRefetch,
  modalData,
  setShowOrderCancelFlag,
  showOrderCancelFlag,
  modalType,
}) {
  const [addressList, setAddressList] = useState([]);
  const [radioOptions, setRadioOptions] = useState([]);

  const [selectedOption, setSelectedOption] = useState(""); // Initialize the selected option

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleRadioChange = (id) => {
    setSelectedOption(id);
  };

  useEffect(() => {
    if (showOrderCancelFlag) {
      console.log(modalData);
      // if (modalType == "cancel") {
      getReasons(modalData);
      // }
    }
  }, [showOrderCancelFlag]);
  useEffect(() => {
    if (radioOptions.length > 0) {
      setSelectedOption(radioOptions?.[0]?.id);
    }
  }, [radioOptions]);

  const getReasons = async (modalData) => {
    try {
      // var bodyFormData = new FormData();
      // bodyFormData.append("token", getUserToken());
      const response = await request.get(
        "order-return-popup/" + modalData?.ongoingOrder?.order_no
      );
      if (response?.data) {
        setRadioOptions(response?.data?.data?.queries);
        setTitle(response?.data?.data?.title);
        setMessage(response?.data?.data?.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getSelectedText = () => {
    const option = radioOptions.find(
      (option) => option.id === selectedOption
    );
    return option ? option.question : "";
  };

  const cancelOrder = async () => {
    try {
      if (modalType == "cancel") {
        var bodyFormData = new FormData();
        bodyFormData.append("cancel_reason_id", selectedOption);
        bodyFormData.append("cancel_reason_text", await getSelectedText());
        const response = await request.post(
          "order-cancellation/" + modalData?.ongoingOrder?.order_no , bodyFormData
        );
        handleModalClose()
        if (response.data.status) {
          setRefetch(true);
          toast((t) => (
            <AlerMessage
              t={t}
              toast={toast}
              status={response.data.status}
              title={"Success"}
              message={response.data.message_1}
            />
          ));
        } else {
          toast((t) => (
            <AlerMessage
              t={t}
              toast={toast}
              status={response.data.status}
              title={"Error"}
              message={response?.data?.message_1}
            />
          ));
        }
      } else {
        var bodyFormData = new FormData();
        bodyFormData.append("cancel_reason_id", selectedOption);
        bodyFormData.append("cancel_reason_text", getSelectedText());

        const response = await request.post(
          "order-return/" + modalData?.ongoingOrder?.order_no,bodyFormData
        );
        handleModalClose()
        if (response.data.status) {
          setRefetch(true);

          toast((t) => (
            <AlerMessage
              t={t}
              toast={toast}
              status={response.data.status}
              title={"Success"}
              message={response.data.message_1}
            />
          ));
        } else {
          toast((t) => (
            <AlerMessage
              t={t}
              toast={toast}
              status={response.data.status}
              title={"Error"}
              message={response?.data?.message_1}
            />
          ));
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleModalClose = () => {
    setShowOrderCancelFlag(false);

    $("#orderCancelModal").toggle();
    $("#orderCancelModal").toggleClass("modal modal fade");
    $("#orderCancelModal").hide();
  };

  return (
    <>
      <div
        className="modal fade bd-example-modal-lg"
        id="orderCancelModal"
        tabIndex={-1}
        aria-labelledby="orderCancelModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-content p-5">
            <div className="border-0">
              <div className="row">
                <div className="col-9 col-md-12 mb-2">
                  <h5
                    className="modal-title fs-3 fw-bold text-center"
                    id="userModalLabel"
                  >
                    {/* {modalType === "cancel"
                      ? "REASON FOR CANCEL"
                      : "REASON FOR RETURN"} */}
                    {title}
                  </h5>
                </div>
                <div className="col-3 col-md-2">
                  <button
                    type="button"
                    className="btn-close btn-custom-close"
                    onClick={handleModalClose}
                  />
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-12">
                    <p
                      style={{
                        "font-family": "Brandon Text",
                        "font-weight": "390",
                        color: "#000000",
                      }}
                    >
                      {message}
                    </p>
                    <form>
                      {radioOptions?.map((option) => (
                        <div key={option.id} className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="reason"
                            id={option.id}
                            // value={option.id}
                            checked={selectedOption === option.id}
                            onClick={() => {
                              handleRadioChange(option.id);
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={option.id}
                          >
                            {option.question}
                          </label>
                        </div>
                      ))}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-2 m-2">
              <div className="col-12">
                <div className="pt-2 text-center">
                  <button
                    onClick={cancelOrder}
                    className="btn btn-dark p-3 col-md-6 validate"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderCancelModal;
