const getGuestToken =  () => {
  //It will return  guest user token
  const guestToken = localStorage.getItem("guestToken");

  return guestToken ? guestToken : null;
};
export default getGuestToken;
