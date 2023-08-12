const getUserOrGuestToken = () => {
  //It will return auth user token or guest user token
  const userData = JSON.parse(localStorage.getItem("userDatas"));
  const guestToken = localStorage.getItem("guestToken");

  return userData ? userData?.token : guestToken;
};
export default getUserOrGuestToken;
