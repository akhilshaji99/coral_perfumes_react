import React, { useEffect } from "react";

function RedirectComponent(props) {
  const redirectUrl = props.redirectUrl;

  const url = window.location.pathname;
  const splittedUrl = url.split("/");
  const endPart = splittedUrl[splittedUrl.length - 1];

  return window.location.replace(`${redirectUrl + endPart}/`);
}

export default RedirectComponent;
