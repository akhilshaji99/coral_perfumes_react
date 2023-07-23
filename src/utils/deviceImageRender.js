const deviceImageRender = (desktop_image=null, mobile_image=null) => {
  const screensWidth = window.innerWidth;
  //Code for device identification
  let screen_type = "Desktop";
  if (screensWidth <= 760) {
    screen_type = "Mobile";
  } else {
    screen_type = "Desktop";
  }
  // console.log(screen_type);
  //#End
  //Return image based on screen size
  if (screen_type === "Desktop") {
    return process.env.REACT_APP_BASE_URL + desktop_image;
  }
  if (screen_type === "Mobile") {
    if (mobile_image) {
      return process.env.REACT_APP_BASE_URL + mobile_image;
    } else {
      return process.env.REACT_APP_BASE_URL + desktop_image;
    }
  }
  //#End
};
export default deviceImageRender;
