import addToCart from "../cart/js/addToCart";
import { useDispatch } from "react-redux";
import NotifyIcon from "../../assets/icons/notify.svg";
import notify from "../cart/js/notify";
import $ from "jquery";

function AddToBag({ variant_id, stock_status, handleCloseBogoModal, setShowPrmoCodeFlag, giveawayProduct }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    setShowPrmoCodeFlag(false);
    $("#promocodeModal").toggle();
    $("#promocodeModal").toggleClass("modal modal fade");
    $("#promocodeModal").hide();
    handleCloseBogoModal();
  }
  return (
    <button
      className="btn btn-dark w-100 mt-2 add-to-bag-btn"
      onClick={() => {
        if (stock_status) {
          addToCart(variant_id, 1, dispatch, giveawayProduct);
        } else {
          notify(variant_id);
        }
        if (giveawayProduct){
          handleClose()
        }
      }}
    >
      {stock_status ? "add to bag" : "Notify Me"}
      {stock_status ? (
        <svg
          width={18}
          height={20}
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.78961 5.0246H12.5479C15.7393 5.0246 16.0584 6.46714 16.2743 8.22722L17.1191 15.0317C17.3913 17.2635 16.6779 19.0871 13.3927 19.0871H4.95421C1.65955 19.0871 0.946182 17.2635 1.22778 15.0317L2.07256 8.22722C2.27906 6.46714 2.5982 5.0246 5.78961 5.0246Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.32031 6.7121V3.43085C5.32031 2.0246 6.28328 1.0871 7.72772 1.0871H10.6166C12.0611 1.0871 13.024 2.0246 13.024 3.43085V6.7121"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <img src={NotifyIcon} alt="notify-icon" className="notify-icon" />
      )}
    </button>
  );
}
export default AddToBag;
