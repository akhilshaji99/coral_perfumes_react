import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { redirectMap } from "../router/redirects";
function RedirectComponent() {
  const navigate = useNavigate();
  let currentUrl =''
  useEffect(() => {
    currentUrl = window.location.pathname; // Get current URL
    console.log('current url:',currentUrl);
    if (redirectMap.hasOwnProperty(currentUrl)) {
      const targetUrl = redirectMap[currentUrl];
      window.location.replace(targetUrl)
    //   navigate(targetUrl, { replace:true }); // Replace history for cleaner UX
    }
  }, [window.location]);

  return console.log('current url:',currentUrl);
}

export default RedirectComponent;
