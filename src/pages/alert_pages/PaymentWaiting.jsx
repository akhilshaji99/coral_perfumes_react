import { useEffect, useState } from "react";
import getUserToken from "../../utils/userToken";
import request from "../../utils/request";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailed from "./PaymentFailed";
import loader from "../../assets/img/loader.gif";
import { useDispatch } from "react-redux";
import { changeCartCount } from "../../redux/cart/cartCount";

function PaymentWaiting() {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    const payement_type = window.location.pathname.split("/")[1];
    if (
      payement_type === "tamara" ||
      payement_type === "payment-tamara-cancel"
    ) {
      getTamaraResponse();
    }
    if (payement_type === "tap") {
      getTapResponse();
    }
    if (payement_type === "cod") {
      getCodResponse();
    }
    if (
      payement_type === "payment-tabby-success" ||
      payement_type === "payment-tabby-cancel" ||
      payement_type === "payment-tabby-failure"
    ) {
      getTabbyResponse();
    }
  }, []);

  const getTabbyResponse = () => {
    // console.log('hereee')
    const queryParameters = new URLSearchParams(window.location.search);
    const payment_id = queryParameters.get("payment_id");
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      bodyFormData.append("payment_id", payment_id);
      const response = request
        .post("tabby_payment_reponse/", bodyFormData)
        .then((response) => {
          setLoading(false);
          if (response?.data?.status) {
            setPaymentStatus(response?.data?.status);
            dispatch(changeCartCount(0));
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
            dispatch(changeCartCount(0));
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
            dispatch(changeCartCount(0));
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
            dispatch(changeCartCount(0));
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
          <img src={loader} style={{ width: "500px" }} />
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
