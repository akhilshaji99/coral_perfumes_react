import request from "../../utils/request";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import getUserOrGuestToken from "../../utils/userOrGuestToken";
import { useDispatch } from "react-redux";

import { changeCartCount } from "../../redux/cart/cartCount";


function TopHeader() {
  const dispatch = useDispatch();

  const [marqueeText, setMarqueeText] = useState("");
  useEffect(() => {
    getMarqueeText();
  }, []);

  const getMarqueeText = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserOrGuestToken());
      const response = await request.post("get_marquee/", bodyFormData);
      if (response?.data?.data?.data?.text_data) {
        setMarqueeText(response?.data?.data?.data?.text_data);
      }
      dispatch(changeCartCount(response?.data?.data?.items_count));
    } catch (error) {
      console.log("error", error);
    }
  };
  if (marqueeText !== "") {
    return (
      <>
        <div className="bg-cutom-banner py-2 d-none d-md-block">
          <div className="container-fluid">
            <div className="row">
              <Marquee autoFill>
                <p className="marquee-text">{marqueeText}</p>
              </Marquee>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
export default TopHeader;
