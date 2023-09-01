import request from "../../utils/request";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
function TopHeader() {
  const [marqueeText, setMarqueeText] = useState("");
  useEffect(() => {
    getMarqueeText();
  }, []);

  const getMarqueeText = async () => {
    try {
      const response = await request.get("get_marquee/");
      if (response.data.text_data) {
        setMarqueeText(response.data.text_data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  if (marqueeText !== "") {
    return (
      <>
        <div className="bg-dark py-2 d-none d-xl-block">
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
