import Tabby from "../../../assets/img/icons/payment/tabby-1.png";
// import Tamara from "../../../assets/img/icons/payment/tamara-1.png";
function productData({ productDatas, currentVariant }) {
  return (
    <>
      <div className="row py-5">
        <div className="col-xl-9 col-sm-12">
          <div className="info-box">
            {productDatas?.message_1 ? (
              <h2>
                <span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.07776H2.60222C3.5967 1.07776 4.37939 1.91476 4.29652 2.87776L3.53224 11.8418C3.5024 12.189 3.54668 12.5386 3.66229 12.8683C3.7779 13.1979 3.9623 13.5005 4.20383 13.7569C4.44535 14.0133 4.73872 14.2178 5.06535 14.3576C5.39198 14.4973 5.74476 14.5692 6.10131 14.5688H15.908C17.234 14.5688 18.3942 13.5068 18.4955 12.2198L18.9927 5.46976C19.1032 3.97576 17.943 2.76076 16.4052 2.76076H4.51751M7.4457 6.47776H18.4955M14.1216 19.0778C14.4269 19.0778 14.7196 18.9592 14.9355 18.7483C15.1514 18.5373 15.2726 18.2511 15.2726 17.9528C15.2726 17.6544 15.1514 17.3682 14.9355 17.1573C14.7196 16.9463 14.4269 16.8278 14.1216 16.8278C13.8163 16.8278 13.5236 16.9463 13.3077 17.1573C13.0919 17.3682 12.9706 17.6544 12.9706 17.9528C12.9706 18.2511 13.0919 18.5373 13.3077 18.7483C13.5236 18.9592 13.8163 19.0778 14.1216 19.0778ZM6.75509 19.0778C7.06036 19.0778 7.35313 18.9592 7.56898 18.7483C7.78484 18.5373 7.90611 18.2511 7.90611 17.9528C7.90611 17.6544 7.78484 17.3682 7.56898 17.1573C7.35313 16.9463 7.06036 16.8278 6.75509 16.8278C6.44982 16.8278 6.15706 16.9463 5.9412 17.1573C5.72534 17.3682 5.60407 17.6544 5.60407 17.9528C5.60407 18.2511 5.72534 18.5373 5.9412 18.7483C6.15706 18.9592 6.44982 19.0778 6.75509 19.0778Z"
                      stroke="black"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {productDatas?.message_1}
              </h2>
            ) : null}
            {productDatas?.message_2 ? (
              <h2>
                <span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.375 7.37776H6.625M13.375 12.7778H6.625M7.3 19.0778H12.7C17.2 19.0778 19 17.2778 19 12.7778V7.37776C19 2.87776 17.2 1.07776 12.7 1.07776H7.3C2.8 1.07776 1 2.87776 1 7.37776V12.7778C1 17.2778 2.8 19.0778 7.3 19.0778Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {productDatas?.message_2}
              </h2>
            ) : null}
          </div>
        </div>
      </div>
      {productDatas?.tabby_attribute_value === "1" ? (
        <div className="row py-2 align-items-center payment-tabby">
          <div className="col-xl-2 col-sm-2 col-3">
            <img src={Tabby} alt="Coral Perfumes" />
          </div>
          <div className="col-xl-7 col-sm-10 col-9 ">
            {productDatas?.tabby_text}
          </div>
        </div>
      ) : null}
      {productDatas?.tamara_attribute_value === "1" && currentVariant ? (
        <div className="row py-2 align-items-center payment-tabby">
          <div className="col-xl-2 col-sm-2 col-2">
            <tamara-widget
              type="tamara-summary"
              amount={currentVariant?.price_amount}
              inline-type="4"
            ></tamara-widget>
          </div>
          {/* <div className="col-xl-11 col-sm-10 col-10 text-sm-end text-lg-start">
            <span>4 interest-free payments AED 40 </span>
          </div> */}
        </div>
      ) : null}
      <div className="row py-5">
        <div className="col-xl-9 col-sm-12">
          <div className="info-box">
            {productDatas?.order_delivery_message ? (
              <h2>
                <span>
                  <svg
                    width={18}
                    height={22}
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6.90633V11.7635M17.5 12.0063C17.5 16.6983 13.692 20.5063 9 20.5063C4.308 20.5063 0.5 16.6983 0.5 12.0063C0.5 7.31433 4.308 3.50633 9 3.50633C13.692 3.50633 17.5 7.31433 17.5 12.0063Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.08594 1.07776H11.9145"
                      stroke="black"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {productDatas?.order_delivery_message}
              </h2>
            ) : null}
            {productDatas?.emirate_message ? (
              <h2 className="delivery-update">
                <span>
                  <svg
                    width={18}
                    height={22}
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3774 13.5063C10.7714 13.5063 11.1615 13.4287 11.5255 13.278C11.8895 13.1272 12.2202 12.9062 12.4988 12.6277C12.7773 12.3491 12.9983 12.0184 13.1491 11.6544C13.2998 11.2904 13.3774 10.9003 13.3774 10.5063C13.3774 10.1124 13.2998 9.72226 13.1491 9.35828C12.9983 8.99431 12.7773 8.66359 12.4988 8.38501C12.2202 8.10644 11.8895 7.88546 11.5255 7.73469C11.1615 7.58393 10.7714 7.50633 10.3774 7.50633C9.58179 7.50633 8.81873 7.8224 8.25612 8.38501C7.69351 8.94762 7.37744 9.71068 7.37744 10.5063C7.37744 11.302 7.69351 12.065 8.25612 12.6277C8.81873 13.1903 9.58179 13.5063 10.3774 13.5063Z"
                      stroke="black"
                    />
                    <path
                      d="M3.57451 9.02416C5.17377 1.66139 15.5893 1.66989 17.1804 9.03266C18.114 13.3517 15.5487 17.0076 13.3 19.2691C12.5142 20.0628 11.4651 20.5063 10.3734 20.5063C9.28171 20.5063 8.2326 20.0628 7.44683 19.2691C5.20624 17.0076 2.64093 13.3432 3.57451 9.02416Z"
                      stroke="black"
                    />
                  </svg>
                </span>
                {productDatas?.emirate_message}
              </h2>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default productData;
