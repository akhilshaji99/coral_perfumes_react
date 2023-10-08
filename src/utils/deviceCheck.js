const deviceCheck = () => {
  const screensWidth = window.innerWidth;
  //Code for device identification
  let screen_type = "Desktop";
  if (screensWidth <= 760) {
    screen_type = "Mobile";
  } else {
    screen_type = "Desktop";
  }
  return screen_type;
};
export default deviceCheck;
