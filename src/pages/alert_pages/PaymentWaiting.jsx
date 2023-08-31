import { useEffect, useState } from "react";
import getUserToken from "../../utils/userToken";
import request from "../../utils/request";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailed from "./PaymentFailed";

function PaymentWaiting() {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    const payement_type = window.location.pathname.split("/")[1];
    if (payement_type === "tamara") {
      getTamaraResponse();
    }
    if (payement_type === "tap") {
      getTapResponse();
    }
    if (payement_type === "cod") {
      getCodResponse();
    }
  }, []);

  const getTamaraResponse = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const urlPaymentStatus = queryParameters.get("paymentStatus");
    const orderId = queryParameters.get("orderId");
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      bodyFormData.append("status", urlPaymentStatus);
      bodyFormData.append("orderId", orderId);
      const response = request
        .post("tamara_payment_reponse/", bodyFormData)
        .then((response) => {
          setLoading(false);
          if (response?.data?.status) {
            setPaymentStatus(response?.data?.status);
          } else {
            setPaymentStatus(response?.data?.status);
          }
          setResponseMessage(response?.data?.data);
        });
    } catch (error) {
      setLoading(false);
      setPaymentStatus(false);
    }
  };

  const getTapResponse = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const tap_id = queryParameters.get("tap_id");
    const data = queryParameters.get("data");
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      bodyFormData.append("tap_id", tap_id);
      bodyFormData.append("data", data);
      const response = request
        .post("tap_payment_reponse/", bodyFormData)
        .then((response) => {
          setLoading(false);
          if (response?.data?.status) {
            setPaymentStatus(response?.data?.status);
          } else {
            setPaymentStatus(response?.data?.status);
          }
          setResponseMessage(response?.data?.data);
        });
    } catch (error) {
      setLoading(false);
      setPaymentStatus(false);
    }
  };

  const getCodResponse = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const order_no = queryParameters.get("order_no");
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      bodyFormData.append("order_no", order_no);
      const response = request
        .post("cod_payment_reponse/", bodyFormData)
        .then((response) => {
          setLoading(false);
          if (response?.data?.status) {
            setPaymentStatus(response?.data?.status);
          } else {
            setPaymentStatus(response?.data?.status);
          }
          setResponseMessage(response?.data?.data);
        });
    } catch (error) {
      setLoading(false);
      setPaymentStatus(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="row align-items-center justify-content-center ">
          <img
            src="https://cdn.pixabay.com/animation/2023/03/20/02/45/02-45-27-186_512.gif"
            style={{ width: "400px" }}
          />
        </div>
      ) : paymentStatus ? (
        <PaymentSuccess responseMessage={responseMessage} />
      ) : !paymentStatus ? (
        <PaymentFailed responseMessage={responseMessage} />
      ) : (
        <PaymentFailed responseMessage={responseMessage} />
      )}
    </>
  );
}
export default PaymentWaiting;
