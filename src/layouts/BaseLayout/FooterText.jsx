import { useSelector } from "react-redux";

import request from "../../utils/request";
import { useEffect, useState } from "react";

function FooterText() {
  const footerDatas = useSelector((state) => state.footerDatas.footerDatas);
  const isApiCompleted = useSelector(
    (state) => state.footerDatas.isApiCompleted
  );

  // console.log(footerDatas.title);
  // console.log(isApiCompleted);

  const [footerContent, setFooterContent] = useState(null);
  const [footerTitle, setFooterTitle] = useState(null);
  useEffect(() => {
    if (isApiCompleted && footerDatas.content === undefined) {
      getFooterContent();
    }
  }, [isApiCompleted]);

  const getFooterContent = async () => {
    try {
      const response = await request.get("/footer-content");
      setFooterContent(response?.data?.data?.content);
      setFooterTitle(response?.data?.data?.title);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="d-sm-block">
      <p className="mb-5">{footerTitle ? footerTitle : footerDatas?.title}</p>
      <div
        className="p-d-c footer-text"
        dangerouslySetInnerHTML={{
          __html: footerContent ? footerContent : footerDatas?.content,
        }}
      />
    </div>
  );
}
export default FooterText;
