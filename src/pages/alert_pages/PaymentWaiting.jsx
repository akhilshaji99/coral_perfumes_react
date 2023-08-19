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
            setResponseMessage(response?.data?.data);
          } else {
            setPaymentStatus(response?.data?.status);
          }
        });
    } catch (error) {
      setLoading(false);
      setPaymentStatus(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="row align-items-center justify-content-center ">
          <img src="https://cdn.pixabay.com/animation/2023/03/20/02/45/02-45-27-186_512.gif" style={{width:'400px'}}/>
        </div>
      ) : paymentStatus ? (
        <PaymentSuccess responseMessage={responseMessage} />
      ) : !paymentStatus ? (
        <PaymentFailed />
      ) : (
        <PaymentFailed />
      )}
    </>
  );
}
export default PaymentWaiting;
